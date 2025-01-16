import { FaTrash } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Cart = () => {
    const [data , refetch] = useCarts()
    const totalPrice = data.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h3 className="text-3xl">Total Item: {data.length}</h3>
                <h3 className="text-3xl">Total Item: {totalPrice}</h3>
                <button className="btn btn-primary">Pay Now</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => <tr key={item._id}>
                            <th>
                                {idx + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}

                            </td>
                            <td> {item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;