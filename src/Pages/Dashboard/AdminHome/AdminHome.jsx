import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaFirstOrder, FaUser } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: stats = [] } = useQuery({
        queryKey: ['admin-states'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-states')
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-2xl">Welcome Back
                <span>
                    {
                        user ? user?.displayName : "unKnown"
                    }
                </span>
            </h2>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-3xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Reveneu</div>
                    <div className="stat-value">${stats.reveneu}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUser></FaUser>
                    </div>
                    <div className="stat-title"> Users</div>
                    <div className="stat-value">{stats.user}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook></FaBook>
                    </div>
                    <div className="stat-title">Menu</div>
                    <div className="stat-value">{stats.item}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaFirstOrder></FaFirstOrder>
                    </div>
                    <div className="stat-title">Order</div>
                    <div className="stat-value">{stats.orders}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;