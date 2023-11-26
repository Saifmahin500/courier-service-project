import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const Root = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('reg')
    return (
        <div >
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
            <Toaster></Toaster>
        </div>
    );
};

export default Root;