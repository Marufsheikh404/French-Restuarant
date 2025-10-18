import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "../CheckOutFrom/CheckOutFrom";

// TODO: get publish key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
    return (
        <div>
            <SectionTitle subTitle={'Payment-Method'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
       
    );
};

export default Payment;