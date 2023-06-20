
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AppointmentForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://doctore-server-site-mamondots.vercel.app/bookAppointments',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
          
            console.log(data)
            if(data.insertedId){
                reset()
                Swal.fire({
                    title: 'success!',
                    text: 'Your Items Added In Your Page',
                    icon: 'success',
                    confirmButtonText: 'Finised'
                })
            }
        })
        .catch(err => console.log(err))
        
        
    };
    return (
        <div>
            <div className="py-20 bg-[#07332F]">
                <h2 className="mt-32 px-36 text-white"><span>Home/</span>AppointmentForm</h2>
                <h2 className="px-36 pt-2 text-4xl font-semibold text-white">SubmitAppointment</h2>
            </div>
            <div className="my-20">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                    <div className="flex space-x-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Put Date</span>
                        </label>
                        <input type="text" {...register("date", { required: true })} placeholder="Write your date" className="input input-bordered w-full max-w-xs" />
                        {errors.date && <span className='text-red-500'>date is required</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Put Time</span>
                        </label>
                        <input type="text" {...register("time", { required: true })} placeholder="Write your time" className="input input-bordered w-full max-w-xs" />
                        {errors.time && <span className='text-red-500'>date is required</span>}
                    </div>
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Write your name" className="input input-bordered w-full max-w-md" />
                        {errors.name && <span className='text-red-500'>date is required</span>}
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" {...register("number", { required: true })} placeholder="Write your number" className="input input-bordered w-full max-w-md" />
                        {errors.number && <span className='text-red-500'>date is required</span>}
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Write your email" className="input input-bordered w-full max-w-md" />
                        {errors.email && <span className='text-red-500'>date is required</span>}
                    </div>

                    <div className="form-control  mt-4 w-full max-w-md">
                        
                        <input type="submit" value="SUBMIT" className=" bg-[#07332F] text-white input input-bordered w-full max-w-md" />
                        
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;