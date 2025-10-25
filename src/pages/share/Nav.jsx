import { CgProfile } from "react-icons/cg";
import logo from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useCard from "../../hooks/useCard";
import useAdmin from "../../hooks/useAdmin";

const Nav = () => {
    // tanstack query
    const [cart] = useCard();
    const [isAdmin]= useAdmin();
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('access-token')
                Swal.fire({
                    title: "Successfully Logged Out!",
                    text: "Come back soon!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            })
            .catch(error => console.log(error));
    };

    const navOptions = (
        <ul className="flex flex-col lg:flex-row items-center gap-8 text-white font-medium">
            <NavLink to={'/'}><li className="hover:text-[#EEFF25] transition">Home</li></NavLink>
            <NavLink to={'/contactUs'}><li className="hover:text-[#EEFF25] transition cursor-pointer">Contact Us</li></NavLink>
            {
                user && isAdmin && <NavLink to={'/dashboard/adminHome'}><li className="hover:text-[#EEFF25] transition cursor-pointer">Dashboard</li></NavLink>
            }
            {
                user && !isAdmin && <NavLink to={'/dashboard/userHome'}><li className="hover:text-[#EEFF25] transition cursor-pointer">Dashboard</li></NavLink>
            }
            <NavLink to={'/menu'}><li className="hover:text-[#EEFF25] transition">Our Menu</li></NavLink>
            <NavLink to={'/order'}><li className="hover:text-[#EEFF25] transition">Our Shop</li></NavLink>
        </ul>
    );

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-40 z-50 shadow-md h-20 flex items-center">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 lg:px-10">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img className="w-12 h-12 object-contain" src={logo} alt="logo" />
                    <div className="flex flex-col leading-tight text-white">
                        <span className="text-lg font-bold tracking-wide">BISTRO-BOSS</span>
                        <span className="text-sm">Restaurant</span>
                    </div>
                </div>

                {/* Nav Links */}
                <div className="hidden lg:flex">{navOptions}</div>

                {/* User Section */}
                <div className="flex items-center gap-4">
                    <NavLink to={'/dashboard/cart'}>
                        <div className="relative">
                            <img className="w-9" src={logo} alt="" />
                            <div className="badge badge-sm badge-secondary absolute -top-1 -right-2">{cart.length}</div>
                        </div>
                    </NavLink>

                    {user ? (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleLogout}
                                className="bg-gray-300 hover:bg-gray-400 text-sm font-semibold px-3 py-1 rounded-md transition"
                            >
                                Sign Out
                            </button>
                            <span className="text-yellow-300 text-sm font-bold">{user?.displayName}</span>
                        </div>
                    ) : (
                        <NavLink to={'/login'}>
                            <CgProfile className="text-4xl text-white hover:scale-110 transition-transform duration-300" />
                        </NavLink>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white ml-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow right-0"
                    >
                        {navOptions}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
