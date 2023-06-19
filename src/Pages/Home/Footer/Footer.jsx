

const Footer = () => {
    return (
        <div className="mx-32 my-16">
            <div className="hero py-8 bg-[#07332F] rounded-lg px-12">
                <div className="hero-content grid lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl text-white font-bold">Contact With Us</h1>
                        <p className="py-4 text-white">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.
                        </p>
                        <p className="text-white">+8801646286477</p>
                        <p className="text-white">Mirpur-1, Dhaka Bangladesh</p>
                    </div>
                    <div className="card">
                        <div className="card-body grid lg:grid-cols-2 gap-6">
                            <div className="form-control">
                                <input type="text" placeholder="Name" className="input input-bordered bg-[#143D3A] text-white" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="email" className="input input-bordered bg-[#143D3A] text-white" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Mobile Number" className="input input-bordered  bg-[#143D3A] text-white" />
                            </div>
                           
                            <div className="form-control">
                                <input type="text" placeholder="Doctor Name" className="input input-bordered bg-[#143D3A] text-white" />
                            </div>
                            <div className="form-control">
                                <input type="date" placeholder="Date" className="input input-bordered bg-[#143D3A] text-white" />
                            </div>
                            <div className="form-control">
                                <input type="time" placeholder="time" className="input input-bordered bg-[#143D3A] text-white" />
                            </div>
                        </div>
                        <div className="px-8">
                                <button className=" bg-[#F7A582] border-none w-full py-2 text-lg text-white font-semibold rounded-lg">Book Now</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;