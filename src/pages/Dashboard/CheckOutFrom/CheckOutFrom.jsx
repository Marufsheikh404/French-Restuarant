import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/Axios/useAxios";
import useCard from "../../../hooks/useCard";

const CheckOutFrom = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const [cart] = useCard();
    const totalPrice = cart.reduce((total,item)=> total + item.price,0)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosSecure,totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }else{
            console.log('paymentMethod', paymentMethod);
            setError('')
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
        </form>
    );
};

export default CheckOutFrom;