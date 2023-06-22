import { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonal = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://doctore-server-site-mamondots.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mx-32 my-16">
            <div className="text-center">
                <h2 className="text-2xl font-bold">What Our Patients Says</h2>
                <p className="px-20 pt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                </p>
            </div>
            <div className="text-center mt-20">
                <Swiper
                    navigation={true}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    modules={[Navigation]}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col justify-center items-center">

                                <p><img className="w-10 h-10 rounded-full" src={review.image} alt="" /></p>

                                <p className="text-xl font-semibold mt-2">{review.name}</p>
                                <p className="text-bass font-medium pb-2">{review.position}</p>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                            </div>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default Testimonal;