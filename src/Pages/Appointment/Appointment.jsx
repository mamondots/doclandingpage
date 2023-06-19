import appmentImg1 from '../../assets/img/chair 1.png'
import appmentImg2 from '../../assets/img/Calender.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
    const [appointmentData, setAppointmentData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAppointmentData(data)
            })
    }, [])
    return (
        <div>
            <div className="py-20 bg-[#07332F]">
                <h2 className="mt-32 px-36 text-white"><span>Home/</span>Appointment</h2>
                <h2 className="px-36 pt-2 text-4xl font-semibold text-white">Appointment</h2>
            </div>
            <div className='px-40 py-12 mt-12 grid grid-cols-2 space-x-2'>
                <img className='shadow-xl' src={appmentImg2} alt="" />
                <img src={appmentImg1} alt="" />
            </div>
            <div>
                <div className='mt-5 text-center pb-12'>
                    <p className='text-[#F7A582]'>Available Services on April 30, 2022</p>
                    <h2 className='text-3xl font-bold py-2'>Please select a service.</h2>
                </div>
                <div className='px-40 pt-8 pb-20'>  
                <div className='grid grid-cols-3 gap-3 space-y-4'>
                    {
                        appointmentData.map(data => <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure className='pt-12'><img className='w-20 h-20 overflow-hidden ' src={data.image} alt="Shoes" /></figure>
                            <div className="card-body flex flex-col justify-center items-center">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.time}</p>
                                <Link to={`/appointmentform/${data._id}`}>
                                <div className="card-actions w-full">
                                    
                                    <button className="btn btn-primary w-full">Book Appointment</button>
                                   
                                </div>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;