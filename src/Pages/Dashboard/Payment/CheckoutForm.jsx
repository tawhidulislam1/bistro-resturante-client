import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const [clientSecret, setClientSecret] = useState('')
    const [paymentId, setPaymentId] = useState(null)
    const navigate = useNavigate()
    // Debug cart and total price
    console.log("Cart data:", cart);
    console.log("Total price:", totalPrice);
    useEffect(() => {
        axiosSecure.post('create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log("Client Secret:", res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [totalPrice, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonmous",
                    name: user?.displayName || "anonmous",
                }
            }
        })
        if (confirmError) {
            console.log(error);
            return
        } else {
            if (paymentIntent.status === "succeeded") {
                console.log("paymentIntent id", paymentIntent.id);
                setPaymentId(paymentIntent.id)


                /// saved ot data base
                const paymentInfo = {
                    name: user.displayName,
                    email: user?.email,
                    transactionId: paymentId,
                    price: totalPrice,
                    date: new Date(),
                    cardIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuID),
                    status: 'pending',
                }
                axiosSecure.post('/payment', paymentInfo)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        if (res.data.result.insertedId) {
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "payment Succesfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                navigate("/dashboard/paymentHistory")
            }
        }
    }
    return (
        <div>
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
                <button className="btn btn-outline btn-ghost btn-wide my-3" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    paymentId && <p className="text-blue-950">your transtion id is<span className="text-red">{paymentId}</span></p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;