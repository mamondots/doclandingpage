import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import AdminMenu from "./AdminMenu";


const Sidbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="w-60 h-[100vh] bg-[#07332F]">
            <div className="flex items-center flex-col pt-12 text-white">
            <img className="w-12 h-12 " src={user?.photoURL} alt="" />
            <h2 className="font-lg font-semibold pt-2">{user?.displayName}</h2>
            <p>{user?.email}</p>
            </div>
            <div className="px-8 py-4"><hr/></div>
            <AdminMenu></AdminMenu>
        </div>
    );
};

export default Sidbar;