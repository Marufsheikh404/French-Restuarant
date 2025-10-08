import { CgProfile } from "react-icons/cg";
import logo from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"

const Nav = () => {

    const navOptions = (
        <div className="flex items-center gap-4">
            <li className="btn text-[#EEFF25]">Home</li>
            <li className="btn">Contact Us</li>
            <li className="btn">DashBoard</li>
            <li className="btn">Our Menu</li>
            <li className="btn">Our Shop</li>
        </div>
    )
    return (
        <div className="fixed z-10 w-[1280px] opacity-96 mx-auto opacity-96">
            <div className="navbar shadow-sm relative">
                {/* overlay effects */}
                <div className="absolute inset-0 bg-black opacity-20 z-0 pointer-events-none"></div>
                {/* nav-content */}
                <div className="navbar-start relative z-10">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center leading-relaxed">
                        <a className="btn btn-ghost text-lg text-white">BISTRO-BOSS</a>
                        <a href="#"> <p className="text-white">Restaurant</p></a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end flex gap-4">
                    <img className="w-11" src={logo} alt="" />
                    <a href="#" className="font-semibold bg-gray-300 px-2 py-1 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-400">Sign_Out</a>
                    <span><CgProfile className="text-4xl"></CgProfile></span>
                </div>
            </div>
        </div>
    );
};

export default Nav;