import { FaStopwatch } from 'react-icons/fa';

const Address = () => {
    return (
        <div className="mx-32 my-16">
            <div className="grid lg:grid-cols-3 space-x-5">
                 <div className='bg-[#07332F] text-white flex justify-center py-10 space-x-2'>
                 <FaStopwatch></FaStopwatch>
                 <div className='-mt-1'>
                    <h3 className='text-lg font-semibold'>Opening Hours</h3>
                    <p>Open 9.00 am to 5.00pm<br/> Everyday</p>
                 </div>
                 </div>
                 <div className='bg-[#F7A582] text-white flex justify-center py-10 space-x-2'>
                 <FaStopwatch></FaStopwatch>
                 <div className='-mt-1'>
                    <h3 className='text-lg font-semibold'>Our Locations</h3>
                    <p>Mirpur-1, Dhaka<br/> -1200, Bangladesh</p>
                 </div>
                 </div>
                 <div className='bg-[#07332F] text-white flex justify-center py-10 space-x-2'>
                 <FaStopwatch></FaStopwatch>
                 <div className='-mt-1'>
                    <h3 className='text-lg font-semibold'>Contact Us</h3>
                    <p>+88016642864</p>
                    <p>+88016642864</p>
                 </div>
                 </div>
                 
            </div>
        </div>
    );
};

export default Address;