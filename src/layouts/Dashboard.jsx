import { FaAd, FaCalculator, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                        <div className="flex items-center gap-3">
                            <FaHome />
                            <li ><NavLink to={'/dashboard/adminHome'}>Admin Home</NavLink></li>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCalculator />
                            <li ><NavLink to={'/dashboard/reservation'}>Reservation</NavLink></li>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaAd />
                            <li ><NavLink to={'/dashboard/review'}>Reviews</NavLink></li>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaShoppingCart />
                            <li ><NavLink to={'/dashboard/cart'}>My Cart</NavLink></li>
                        </div>
                        <div className="divider bg-white w-50 h-1"></div>

                        <div className="flex items-center gap-3">
                            <FaHome />
                            <li ><NavLink to={'/'}>Home</NavLink></li>
                        </div>
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