/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";

const ItemCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { price, recipe, image, name, _id } = item;
    const AxiosSecure = useAxiosSecure()
    const location = useLocation()
    const navigate = useNavigate()
    const [, refetch] = useCarts()
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuID: _id,
                email: user.email,
                name: name,
                image: image,
                price: price,
            }
            AxiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Add to Cart Succesfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    refetch();
                })
        }
        else {
            Swal.fire({
                title: "You aren't Logged in ",
                text: "Place Login First",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {
                        state: { from: location }
                    })
                }
            });

        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="absolute right-2 bg-slate-900 px-4 py-1 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart()} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;