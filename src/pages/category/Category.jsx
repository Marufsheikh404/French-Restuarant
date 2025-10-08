import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import sild1 from "../../assets/home/slide1.jpg"
import sild2 from "../../assets/home/slide2.jpg"
import sild3 from "../../assets/home/slide3.jpg"
import sild4 from "../../assets/home/slide4.jpg"
import sild5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Bistroboss from '../bistroBoss/Bistroboss';

const Category = () => {
    return (
        <section>
            <SectionTitle
            title={'From 11.00 AM To 10.00 PM'}
            subTitle={'ORDER ONLINE'}
            ></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-4"
            >
                <SwiperSlide>
                    <img className='w-full object-cover rounded-md' src={sild1} alt="" />
                    <h1 className='text-4xl text-white -mt-20 text-center'>Caeser Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover rounded-md' src={sild4} alt="" />
                    <h1 className='text-4xl text-white -mt-20 text-center'>Choklet Cake</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover rounded-md' src={sild5} alt="" />
                    <h1 className='text-4xl text-white -mt-20 text-center'>Caeser Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover rounded-md' src={sild2} alt="" />
                    <h1 className='text-4xl text-white -mt-20 text-center'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover rounded-md' src={sild3} alt="" />
                    <h1 className='text-4xl text-white -mt-19 text-center'>Desserts</h1>
                </SwiperSlide>
            </Swiper>

            <Bistroboss>
            </Bistroboss>
        </section>
    );
};

export default Category;