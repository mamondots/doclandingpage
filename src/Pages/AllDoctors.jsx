import { useEffect, useState } from "react";
import ExportDoctorCard from "./Home/ExportDoctor/ExportDoctorCard";


const AllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="mx-32">
        <div className="text-center pt-40">
            <h2 className="text-2xl font-bold">Our Expert Doctors</h2>
            <p className="px-20 pt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

            </p>
        </div>
        <div className="grid lg:grid-cols-3  mt-20 gap-6 pb-8">
             {
                doctors.map(doctor =><ExportDoctorCard
                 key={doctor._id}
                 doctor={doctor}
                >

                </ExportDoctorCard>)
             }
        </div>
    </div>
    );
};

export default AllDoctors;