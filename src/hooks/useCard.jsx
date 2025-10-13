import { useQuery } from "@tanstack/react-query";
import useAxios from "./Axios/useAxios";
import useAuth from "./useAuth";



const useCard = () => {
    const axiosSecure = useAxios();
    const {user} = useAuth();
//    tanstack query
const {data: cart =[], refetch} = useQuery({
    queryKey:['cart', user?.email],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data;
    }
})
return[cart,refetch]
};
export default useCard;