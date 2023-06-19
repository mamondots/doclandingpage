import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import MainFooter from "../Pages/Home/MainFooter/MainFooter";



const Main = () => {
    return (
        <div>
            <Navbar className='z-10'></Navbar>
            <Outlet></Outlet>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Main;