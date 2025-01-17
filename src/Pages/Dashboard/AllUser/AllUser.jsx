import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const AxiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await AxiosSecure.get('user')
            return res.data
        }
    })
    const handleMakeAdmin = user => {
        AxiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "New Admin!",
                        text: `${user.name} is admin now`,
                        icon: "success"
                    });
                    refetch()
                }
            })
    }
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

                AxiosSecure.delete(`/user/${id}`)
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
                <h3 className="text-3xl">Total Users {users.length}</h3>
                <h3 className="text-3xl">All User</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => <tr key={user._id}>
                            <th>
                                {idx + 1}
                            </th>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}

                            </td>
                            <td>
                                {
                                    user.role === "admin" ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500  btn-lg"><FaUsers className="text-white text-2xl"></FaUsers></button>
                                }
                            </td>
                            <th>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-lg"><FaTrash className="text-red-700"></FaTrash></button>
                            </th>
                        </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUser;