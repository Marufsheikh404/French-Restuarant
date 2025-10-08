import { Outlet } from "react-router-dom";
import Footer from "../pages/share/Footer";
import Nav from "../pages/share/Nav";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;