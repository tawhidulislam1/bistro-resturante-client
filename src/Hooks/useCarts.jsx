import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import {
    useQuery,
} from '@tanstack/react-query'
import { AuthContext } from "../Provider/AuthProvider";

const useCarts = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCarts;