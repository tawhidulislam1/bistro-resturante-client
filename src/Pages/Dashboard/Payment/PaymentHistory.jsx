import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            return res.data
        }
    })
    console.log(payments);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Email</th>
                            <th>Trancation Id</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((item, idx) => <tr key={item._id}>
                            <th>
                                {idx + 1}
                            </th>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                ${item.transactionId}
                            </td>
                            <td>
                                ${item.price}
                            </td>

                            <th>
                                {item.status}
                            </th>
                        </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;