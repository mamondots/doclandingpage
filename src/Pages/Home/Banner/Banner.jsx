import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";

import './Banner.css'

//banner Images
import banner01 from '../../../assets/img/Dbanner01.jpg'
import banner02 from '../../../assets/img/Dbanner02.jpg'
import banner03 from '../../../assets/img/Dbanner03.jpg'
import banner04 from '../../../assets/img/Dbanner04.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className=" bg-red-600">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <img className="w-full relative" src={banner01} alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide><img className="w-full" src={banner02} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full" src={banner03} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full" src={banner04} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;