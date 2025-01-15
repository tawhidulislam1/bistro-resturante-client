/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { price, recipe, image, name } = item;
    const location = useLocation()
    const navigate = useNavigate()
    const handleAddToCart = food => {
        if (user && user.email) {
            console.log(food);
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
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;