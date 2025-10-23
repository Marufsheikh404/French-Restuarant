import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@smastrom/react-rating/style.css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { SiComma } from "react-icons/si";

const Testomoniya = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-server-mu-nine.vercel.app/Reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <div className="my-6">
                <SectionTitle
                    title={'----What Our Clinets Says----'}
                    subTitle={'TESTIIMONIALS'}
                ></SectionTitle>
            </div>
            <div >
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <div>
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <div className="mx-20 place-items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <div className="flex items-center justify-center my-5 w-96">
                                       <div> <SiComma  size={40}/></div>
                                        <div><SiComma  size={40}/></div>
                                        <div><SiComma  size={40} /></div>
                                    </div>
                                    <p className="text-gray-500 text-md leading-relaxed mt-5">{review.details}</p>
                                    <h1 className="text-[#CD9003] font-semibold text-4xl mt-2">{review.name}</h1>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testomoniya;