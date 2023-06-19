
import { Outlet } from "react-router-dom";
import AllUser from "../Pages/Dasboard/AllUser";
import Sidbar from "../Pages/Dasboard/Sidbar";


const Dasboard = () => {
    return (
        <div>
            <Outlet></Outlet>
            <div>
                
                <Sidbar></Sidbar>
             
            </div>
        </div>
    );
};

export default Dasboard;