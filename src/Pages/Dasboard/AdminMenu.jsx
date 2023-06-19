import { Link } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div className="flex flex-col space-y-2 text-white pl-16 pt-12">
            <Link to='/dasboard/allusers'><a>All Users</a></Link>
            <Link to='/dasboard/adddoctor'><a>Add a Doctor</a></Link>
            <Link to='/dasboard/managedoctor'><a>Manage Doctors</a></Link>
            <Link to='/'><a>Home</a></Link>
            <Link to='/appointment'><a>Appointment</a></Link>
        </div>
    );
};

export default AdminMenu;