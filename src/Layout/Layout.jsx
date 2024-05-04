import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div className="w-[85%] mx-auto max-w-7xl">
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;