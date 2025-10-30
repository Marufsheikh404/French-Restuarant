import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/Axios/useAxios";
import useCard from "../../../hooks/useCard";
import useAuth from "../../../hooks/useAuth";
import { Notyf } from "notyf";
const notyf = new Notyf();
const CheckOutFrom = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [Transition, setTransition] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const [cart] = useCard();
    const { user } = useAuth();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    // Notification Of Transaction 
    useEffect(() => {
        if (Transition) {
            notyf.success(`Your Transaction ID: ${Transition}`);
        }
    }, [Transition]);


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message)
        } else {
            console.log('paymentMethod', paymentMethod);
            setError('')
        }

        try {
            // confirm payment
            const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.name || "anonymous"
                    }
                }
            });

            if (confirmErr) {
                console.error('confirmError:', confirmErr.message);
                return; // error হলে আগের কাজ বন্ধ
            }

            console.log('paymentIntent:', paymentIntent);

            if (paymentIntent.status === "succeeded") {
                console.log('Transaction Id:', paymentIntent.id);
                setTransition(paymentIntent.id);

                // save the data to the server
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'
                };

                try {
                    const res = await axiosSecure.post('/payment', payment);
                    if (res.data?.success) {
                        console.log('Payment successfully saved:', res.data);
                    } else {
                        console.error('Payment save failed:', res.data);
                    }
                } catch (err) {
                    console.error('Axios POST /payment failed:', err.response?.data || err.message);
                }
            } else {
                console.warn('Payment not succeeded:', paymentIntent.status);
            }

        } catch (err) {
            console.error('Unexpected error during payment confirmation:', err);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn border-none text-sm my-3 bg-amber-500 rounded" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-sm text-red-600">{error}</p>
            {/* {Transition && notyf.success(`Your Transaction ID :${Transition}`)} */}
        </form>
    );
};

export default CheckOutFrom;