import { FaHome, FaPaypal, FaUtensils, FaList, FaLock, FaUsers, } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();

    const activeClass =
        "flex items-center gap-3 bg-[#800080] text-white p-2 rounded";
    const inactiveClass =
        "flex items-center gap-3 p-2 hover:bg-gray-200 rounded text-black";

    if (isAdminLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );
    }

    return (
        <section>
            <div className="flex flex-col md:flex-row">
                {/* Dashboard Side Bar */}
                <div className="w-full md:w-64 min-h-[50vh] md:min-h-screen bg-[#D1A054] text-black">
                    <div className="flex flex-col items-center py-6">
                        <h1 className="text-2xl md:text-3xl font-bold">FRENCH</h1>
                        <p className="text-xs md:text-sm font-cinzel">Restuarant</p>
                    </div>

                    <ul className="menu p-4 flex flex-col gap-2 text-sm md:text-base">
                        {isAdmin ? (
                            <>
                                <NavLink
                                    to="/dashboard/adminHome"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaHome />
                                    <span>Admin Home</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/AddItems"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaUtensils />
                                    <span>Add Items</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/ManagesItem"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaList />
                                    <span>Manages Items</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/alluser"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaUsers />
                                    <span>All Users</span>
                                </NavLink>

                                <div className="divider bg-white w-full h-[1px] my-2"></div>

                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaHome />
                                    <span>Home</span>
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/dashboard/userHome"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaHome />
                                    <span>Home</span>
                                </NavLink>

                                <NavLink
                                    to="/menu"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaList />
                                    <span>Menu</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/shop"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaLock />
                                    <span>Shop</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/contact"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <MdPermContactCalendar />
                                    <span>Contact</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/paymentHistory"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    <FaPaypal />
                                    <span>Payment History</span>
                                </NavLink>
                            </>
                        )}
                    </ul>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-4 md:p-8">
                    <Outlet />
                </div>
            </div>
        </section>

    );
};

export default Dashboard;
