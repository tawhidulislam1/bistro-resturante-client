import { useQuery } from "@tanstack/react-query";
import useAxosPublic from "./useAxosPublic";

const useMenu = () => {
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://bistro-boss-serve-ten.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setLoading(false);
    //             setMenu(data)
    //         })
    // }, [])
    const axiosPublic = useAxosPublic()
    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic.get('menu')
            return res.data
        }
    })
    return [menu, loading ,refetch]
};

export default useMenu;