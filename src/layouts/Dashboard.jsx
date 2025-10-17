import { FaAd, FaBook, FaCalculator, FaCaretDown, FaHome, FaShoppingCart, FaUserAlt, FaUtensils } from "react-icons/fa";
import { FaList, FaListCheck, FaLock, FaUser, FaUsers } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    // TODO: get admin value form the database
    const [isAdmin, isAdminLoading] = useAdmin();
    // const isAdmin = true;
    if (isAdminLoading) {
        return <span className="loading loading-dots loading-xl"></span>
    }
    return (
        <section >
            <div className="flex ">
                {/* Dashboard Side Bar */}
                <div className="w-64 min-h-screen bg-[#D1A054]">
                    <div className="flex flex-col items-center">
                        <h1 className="text-black text-3xl font-bold">Bistro Boss</h1>
                        <p className="text-xm text-black font-cinzel">RESTAURENT</p>
                    </div>
                    <ul className="menu p-4">
                        {
                            isAdmin ? (<>
                                <div className="flex items-center gap-3">
                                    <FaHome />
                                    <li ><NavLink to={'/'}>Admin Home</NavLink></li>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaUtensils />
                                    <li ><NavLink to={'/dashboard/AddItems'}>Add Items</NavLink></li>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaList />
                                    <li ><NavLink to={'/dashboard/ManagesItem'}>Manages Items</NavLink></li>
                                </div>

                                {/* <div className="flex items-center gap-3">
                                    <FaBook />
                                    <li ><NavLink to={'/dashboard/'}>Manages Bookings</NavLink></li>
                                </div> */}

                                <div className="flex items-center gap-3">
                                    <FaUsers />
                                    <li ><NavLink to={'/dashboard/alluser'}>All Users</NavLink></li>
                                </div>
                                <div className="divider bg-white w-50 h-1"></div>
                            </>):(
                                <>
                                    {/* shared list */}
                                    <div className="flex items-center gap-3">
                                        <FaHome />
                                        <li ><NavLink to={'/'}>Home</NavLink></li>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaListCheck />
                                        <li ><NavLink to={'/dashboard/menu'}>Menu</NavLink></li>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaLock />
                                        <li ><NavLink to={'/dashboard/shop'}>Shop</NavLink></li>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <MdPermContactCalendar />
                                        <li ><NavLink to={'/dashboard/contact'}>Contact</NavLink></li>
                                    </div>
                                </>
                            )
                        }
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;