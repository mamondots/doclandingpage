import { useEffect, useState } from "react";
import ExportDoctorCard from "./ExportDoctorCard";


const ExportDoctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() =>{
        fetch('https://doctore-server-site-1btl6gt9p-mamondots.vercel.app/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="mx-32 my-16">
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold">Our Expert Doctors</h2>
                <p className="px-20 pt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                </p>
            </div>
            <div className="grid lg:grid-cols-3 space-x-8 mt-20">
                 {
                    doctors.slice(0,3).map(doctor =><ExportDoctorCard
                     key={doctor._id}
                     doctor={doctor}
                    >

                    </ExportDoctorCard>)
                 }
            </div>
        </div>
    );
};

export default ExportDoctor;