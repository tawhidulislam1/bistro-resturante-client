
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_API);
const Payment = () => {
    return (
        <div>
            <div>
                <SectionTitle heading={'Payment'} subHeading={'Place Pay then eat'}></SectionTitle>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;