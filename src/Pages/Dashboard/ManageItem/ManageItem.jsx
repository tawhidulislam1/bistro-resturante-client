
import { FaEdit, FaTrash } from 'react-icons/fa';
import SectionTitle from '../../../Componentes/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [menu, , refetch] = useMenu()
    console.log(menu);
    const AxiosSecure = useAxiosSecure()
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

                AxiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "menu has been deleted.",
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
            <SectionTitle heading="Manage All Items" subHeading="Hurry UP"></SectionTitle>
            <div className="flex justify-evenly">
                <h3 className="text-3xl">Total Item: </h3>
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
                            <th>Updata</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, idx) => <tr key={item._id}>
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
                            <td>
                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                    <button className="btn btn-ghost btn-lg"><FaEdit></FaEdit></button>
                                </Link>
                            </td>
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

export default ManageItem;