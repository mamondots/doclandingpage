import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaMapMarkerAlt,FaCalendar,FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ExportDoctorCard = ({ doctor }) => {
    const { name, position, image, rating, address, available_date, price,_id } = doctor
    return (
        <div className="card card-compact bg-base-100 shadow-2xl">
            <figure><img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <h2 className="text-base font-medium text-[#6C6B6B]">BTP-{position}</h2>
                <p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                </p>
                <div className=''>
                    <p className='flex items-center py-1 text-[#6C6B6B] text-base'><FaMapMarkerAlt className='mr-2'></FaMapMarkerAlt> {address}</p>
                    <p className='flex items-center text-[#6C6B6B] text-base'><FaCalendar className='mr-2'></FaCalendar> {available_date}</p>
                    <p className='flex items-center py-1 text-[#6C6B6B] text-base'><FaDollarSign className='mr-2'></FaDollarSign>{price}</p>
                </div>
                <div className="card-actions">
                    <Link className='w-full' to={`/singledetails/${_id}`}>
                    <button className=" bg-[#F7A582] w-full py-3 border-2 border-[#F7A582] text-xl font-semibold text-white rounded-xl hover:bg-transparent hover:text-[#F7A582]">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExportDoctorCard;