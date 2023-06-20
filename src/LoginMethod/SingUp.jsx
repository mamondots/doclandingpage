import { Link, useLocation, useNavigate } from 'react-router-dom';
import singINImg from '../assets/img/singin.png'
import singINImg2 from '../assets/img/singin2.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const SingUp = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const onSubmit = data => {
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            navigate(from, {replace:true})
            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
                const saveUser = {name:data.name, photo:data.photoURL}
                fetch('https://doctore-server-site-1btl6gt9p-mamondots.vercel.app/users',{
                    method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    reset()
                })
                
            })
        })
        .catch(err => console.log(err.message))
        
    };
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-[#07332F] h-full py-36 flex justify-center items-center relative'>
                <img className='w-1/2' src={singINImg} alt="" />
                <img className='absolute top-0 right-0 w-1/2' src={singINImg2} alt="" />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center mt-26'>
                    <h2 className='text-2xl font-bold mt-10'>Sign Up to Doc House</h2>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="pb-1">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered w-full max-w-md" />
                        {errors.name && <span className='text-red-500'>This field is required</span>}
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="pb-1">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered w-full max-w-md" />
                        {errors.email && <span className='text-red-500'>Email is required</span>}
                    </div>

                    <div className='flex space-x-4 '>
                        <div className="form-control w-full  pt-1">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <span className='text-red-500'>password is required</span>}
                            <p className='py-2 text-base'>Forget Password</p>
                        </div>

                        <div className="form-control w-full  pt-1">
                            <label className="label">
                                <span className="label-text">confirm Password</span>
                            </label>
                            <input type="password" {...register("cfpassword", { required: true })} placeholder="Enter confirm password" className="input input-bordered w-full max-w-xs" />
                            {errors.cfpassword && <span className='text-red-500'>conform password is required</span>}
                        </div>
                    </div>

                    <div className="form-control w-full max-w-md mt-4">

                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input type="url" {...register("photoURL", { required: true })} placeholder="Enter photourl" className=" w-full max-w-md input input-bordered" />
                        {errors. photoURL&& <span className='text-red-500'>photo is required</span>}
                    </div>

                    <div className="form-control w-full max-w-md mt-4">

                        <input type="submit" value="SingUp" className="py-3 rounded-md w-full max-w-md cursor-pointer bg-[#F7A582] text-white outline-none" />

                    </div>



                    <p className='mt-3'>Already registered?. Go to <Link to='/login'>
                        <span className='text-[#F7A582] font-bold cursor-pointer'>LogIn</span>
                    </Link></p>
                </form>
            </div>
        </div>
    );
};

export default SingUp;