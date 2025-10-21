import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/Axios/useAxios";
import { FaDollarSign, FaList } from "react-icons/fa";
import { FaBowlFood, FaUsers } from "react-icons/fa6";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    });

    const { data: chart = {} } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const result = await axiosSecure.get('/order-stats');
            return result.data;
        }
    })
    return (
        <div>
            <h1 className="text-3xl text-black">
                <span className="mr-3">Well Come</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>

            <div className="stats shadow flex gap-2 mt-3">
                <div className="stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-xl"></FaDollarSign>
                    </div>
                    <div className="stat-title text-black text-xl font-bold">Revenue</div>
                    <div className="stat-value">${stats?.revenue || 0}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-xl"></FaUsers>
                    </div>
                    <div className="stat-title text-black text-xl font-bold">Customers</div>
                    <div className="stat-value">{stats?.users || 0}</div>
                </div>

                <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="stat-figure text-secondary">
                        <FaBowlFood></FaBowlFood>
                    </div>
                    <div className="stat-title text-black text-xl font-bold">Products</div>
                    <div className="stat-value">{stats?.menuItems || 0}</div>
                </div>

                <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div className="stat-figure text-secondary">
                        <FaList></FaList>
                    </div>
                    <div className="stat-title text-black text-xl font-bold">Orders</div>
                    <div className="stat-value">{stats?.orders || 0}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;