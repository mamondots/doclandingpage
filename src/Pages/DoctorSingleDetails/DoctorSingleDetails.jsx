import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

const DoctorSingleDetails = () => {
    const { id } = useParams()
    const [singleInfo, setSingleInfo] = useState([])
    useEffect(() => {
        fetch(`https://doctore-server-site-1btl6gt9p-mamondots.vercel.app/doctors/${id}`)
            .then(res => res.json())
            .then(data => setSingleInfo(data))
    }, [])
    const { name, position, image, rating, address, available_date, price, _id, aboutme, education, services, awards, specializations, location, business_hours, work_experience,
        degree } = singleInfo
    console.log(singleInfo)
    return (
        <div className="bg-[#F2F2F2]">
            <div className="py-20 bg-[#07332F]">
            <h2 className="mt-32 px-36 text-white"><span>Home/</span>Doctor details</h2>
                <h2 className="px-36 pt-2 text-4xl font-semibold text-white">Doctor Details</h2>
            </div>
            <div className="bg-white mx-20 py-8 mt-8">
                <div className="py-12 mx-12 flex space-x-4">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">{name}</h2>
                        <p className="text-[#6C6B6B]">{position}</p>
                        <p className="flex space-x-2  items-center">
                            <p>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating}
                                    readOnly
                                />
                            </p>
                            <p>
                                ({rating})
                            </p>
                        </p>
                        <p className="flex items-center space-x-4 text-[#6C6B6B]"><FaMapMarkerAlt className="mr-1"></FaMapMarkerAlt>{address}</p>
                        <div className="social-medai flex space-x-2 mt-2">
                            <span className="px-2 py-2 text-[#F7A582] cursor-pointer hover:text-black bg-[#DCDDDF]"><FaFacebookF></FaFacebookF></span>
                            <span className="px-2 py-2 text-[#F7A582] cursor-pointer hover:text-black bg-[#DCDDDF]"><FaInstagram></FaInstagram></span>
                            <span className="px-2 py-2 text-[#F7A582] cursor-pointer hover:text-black bg-[#DCDDDF]"><FaTwitter></FaTwitter></span>
                            <span className="px-2 py-2 text-[#F7A582] cursor-pointer hover:text-black bg-[#DCDDDF]"><FaLinkedinIn></FaLinkedinIn></span>
                        </div>
                        <div className="mt-2 flex space-x-2">
                            <button className="py-2 px-8 border-2 border-[#D5D6D8] hover:bg-[#D5D6D8] text-base rounded-md">Dental Filling</button>
                           <Link to='/appointment'>
                           <button className="py-2 px-8 border-2 border-[#D5D6D8] hover:bg-[#D5D6D8] text-base rounded-md">Appointment</button>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white mx-20 py-8 px-10 mt-8">
                <p className="w-2/3"><span className="text-2xl font-bold pb-2">About Me</span><br />{aboutme}</p>
                <p className="pt-2">
                    <span className="text-2xl font-bold pb-2 pt-3"> Education</span><br />
                    <div className="py-2 flex space-x-2">
                        {
                            education?.map(edu => <div key={edu._id}>
                                {edu.degree}
                                {edu.university}
                                {edu.year}

                            </div>)
                        }
                    </div>
                </p>
                <p className="py-3 ">
                    <span className="text-2xl font-bold pb-2 pt-3">My Services</span><br />
                    <div className="flex mt-1  space-x-3">
                        {

                            services?.map(service => <p key={service._id}>{service}</p>)
                        }
                    </div>
                </p>

                <p>
                    <span className="text-2xl font-bold"> Specializations</span><br />
                    <div className="flex space-x-4 mt-2">
                        {
                            specializations?.map(specialization => <p key={specialization._id}>{specialization}</p>)
                        }
                    </div>
                </p>

                <p className="py-3 ">
                    <span className="text-2xl font-bold">My work</span><br />
                    <div className="flex  space-x-4">
                        {

                            work_experience?.map(experience => <div key={experience._id}>
                                {experience.position}
                                {experience.hospital}
                                {experience.location}

                            </div>)
                        }
                    </div>
                </p>


                <p className="py-3 ">
                    <span className="text-2xl font-bold">My Award</span><br />
                    <div className="flex  space-x-6">
                        {

                            awards?.map(award => <div key={award._id}>
                                {award.name}
                                {award.year}
                                {award.details}

                            </div>)
                        }
                    </div>
                </p>

            </div>

        </div>
    );
};

export default DoctorSingleDetails;