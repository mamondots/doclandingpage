import footerlogo from '../../../assets/img/footerLogo.png'

const MainFooter = () => {
    return (
        <div>
            <footer className="footer px-32 p-10 bg-base-200 text-base-content">
                <div>
                    <div className='flex items-center'>
                         <img src={footerlogo} alt="" />
                         <h2 className='ml-2 text-xl font-semibold'>Mamondots</h2>
                    </div>
                    <p className='mt-1'>Lorem Ipsum is simply dummy <br/>text of the printing and typesetting industry. <br/>has been since the printer took.</p>
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
                <div>
                    <span className="text-xl font-bold">Quick Links</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">Departments</a>
                    <a className="link link-hover">Online Payment</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">My Account</a>
                </div>
                <div>
                    <span className="text-xl font-bold">Doc House Services</span>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Diagnosis Clinic</a>
                    <a className="link link-hover">Cardiac Clinic</a>
                    <a className="link link-hover">Laboratory Analysis</a>
                    <a className="link link-hover">Gynecological Clinic</a>
                    <a className="link link-hover">Personal Counseling</a>
                    <a className="link link-hover">Dental Clinic</a>
                </div>
                <div>
                    <span className="text-xl font-bold">Working Hours</span>
                    <a className="link link-hover">Monday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                </div>
            </footer>
        </div>
    );
};

export default MainFooter;