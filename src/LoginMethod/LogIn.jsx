import { Link, useLocation, useNavigate } from 'react-router-dom';
import singINImg from '../assets/img/singin.png'
import singINImg2 from '../assets/img/singin2.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const LogIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {singIn} = useContext(AuthContext)
    const onSubmit = data => {
        singIn(data.email, data.password)
        .then(result =>{
            const user = result.user
            navigate(from, {replace:true})
            console.log(user)
            reset()
        })
        console.log(data)
    };
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-[#07332F] h-full py-36 flex justify-center items-center relative'>
                <img className='w-1/2' src={singINImg} alt="" />
                <img className='absolute top-0 right-0 w-1/2' src={singINImg2} alt="" />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center mt-36'>
                     <h2 className='text-2xl font-bold pb-8'>Sign in to Doc House</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="pb-1">Username or Email Address</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter your username or address" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-500'>Email is required</span>}
                    </div>

                    <div className="form-control w-full max-w-xs pt-1">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span className='text-red-500'>password is required</span>}
                        <p className='py-2 text-base'>Forget Password</p>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        
                       <input type="submit" value="LogIn" className="py-3 rounded-md w-full max-w-xs cursor-pointer bg-[#F7A582] text-white outline-none" />
                       
                    </div>
                        <p className='mt-3'>Please register at first. Go to <Link to='/singup'>
                        <span className='text-[#F7A582] font-bold cursor-pointer'>SIGN UP</span>
                        </Link></p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;