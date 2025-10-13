import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/Axios/useAxios";

const AllUsers = () => {
    const axiosSecure = useAxios();
    const {data: users =[]}= useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-2xl text-black font-cinzel">Total Users: {users.length}</h2>
        </div>
    );
};

export default AllUsers;