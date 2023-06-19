import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Dlogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import userImg from '../../../assets/img/userImg.jpg'
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(() =>{ })
        .catch(err => console.log(err))
    }
    const navOption = <>
        <li><Link to='/'><a className='text-lg'>Home</a></Link></li>
        <li><Link to='/alldoctor'><a className='text-lg'>All Doctor</a></Link></li>
        <li><Link to='/appointment'><a className='text-lg'>Appointment</a></Link></li>
        <li><Link to='/dasboard'><a className='text-lg'>Dasboard</a></Link></li>
        {
            user ?
                <>
                 {
                    user?.photoURL? 
                    <>
                    <button onClick={handleLogOut}><img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" /></button>
                    </>
                    :
                    <><button onClick={handleLogOut}><img className='w-8 h-8 rounded-full' src={userImg} alt="" /></button></>
                 }
                </> :
                <>
                <li><Link to='/login'><a className='text-lg'>Login</a></Link></li>
                </>
        }
       
        
    </>
    return (
        <div className="navbar fixed z-10 flex justify-between px-28 py-8 bg-white">
            <div className="">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 w-52">
                        {navOption}
                    </ul>
                </div>
                 <Link to='/'>
                 <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <a className="text-xl font-semibold cursor-pointer">Mamondots</a>
                </div>
                 </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;