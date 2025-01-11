
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"


const Category = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img className='w-full' src={slide1} alt="" />
                    <div className='-mt-14 '>
                        <h3 className='text-center text-white text-4xl'>Salads</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} alt="" />
                    <div className='-mt-14 '>
                        <h3 className='text-center text-white text-4xl'>Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} alt="" />
                    <div className='-mt-14 '>
                        <h3 className='text-center text-white text-4xl'>Soupe</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide4} alt="" />
                    <div className='-mt-14 '>
                        <h3 className='text-center text-white text-4xl'>Desert</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide5} alt="" />
                    <div className='-mt-14 '>
                        <h3 className='text-center text-white text-4xl'>Salads</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;