// src/components/SwiperSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const DynamicSlider = ({ slides }) =>
{
    return (
        <Swiper
            autoplay
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[ Pagination, Navigation ]}
            className='w-full h-[600px]'

        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.image} alt={slide.alt} />
                </SwiperSlide>
            ))}
            ...
        </Swiper>
    );
};

export default DynamicSlider;
