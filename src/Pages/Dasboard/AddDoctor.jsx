import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddDoctor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://doctore-server-site-mamondots.vercel.app/doctors',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.insertedId){
                reset()
                Swal.fire({
                    title: 'success!',
                    text: 'Your Items Added In Your Page',
                    icon: 'success',
                    confirmButtonText: 'Finised'
                })
            }
        })
        
    };
    return (
        <div className="mt-12 absolute left-[60vh]">
            <h2 className="text-3xl font-bold">Add a Doctor</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[100vh]">
                    <div className="flex space-x-4">
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Doctor Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-md" />
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Doctor Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered w-full max-w-md" />
                    </div>
                    </div>


                    <div className="flex space-x-4">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Doctor position
                            </span>
                        </label>
                        <input type="text" {...register("position", { required: true })} placeholder="Enter position" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Doctor Rating
                            </span>
                        </label>
                        <input type="text" {...register("rating", { required: true })}  placeholder="Enter rating" className="input input-bordered w-full max-w-xs" />
                    </div>
                    </div>

                    <div className="flex space-x-4">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available_date
                            </span>
                        </label>
                        <input type="text" {...register("available_date", { required: true })} placeholder="available_date" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Doctor Address

                            </span>
                        </label>
                        <input type="text" {...register("address", { required: true })}  placeholder="exp:789 Oak Street, City, State" className="input input-bordered w-full max-w-xs" />
                    </div>
                    </div>

                    <div className="flex space-x-4">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Doctor price

                            </span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Enter price" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Upload image

                            </span>
                        </label>
                        <input type="url" {...register("image", { required: true })} placeholder="Upload image" className="input input-bordered w-full max-w-xs" />
                    </div>
                    </div>


                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Doctor Details

                            </span>
                        </label>
                        <input type="text" {...register("aboutme", { required: true })} placeholder="Enter details" className="input input-bordered w-full max-w-2xl py-12" />
                    </div>

                    <input className="btn btn-neutral mt-4 max-w-2xl" type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;