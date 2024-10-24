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
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const DynamicSlider = ({ slides }) =>
{
    return (
        <Swiper
            modules={[ Pagination, Navigation, Autoplay ]}

            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={1500}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}

            navigation={true}

            className='w-full h-[600px]'

        >
            {slides.map((slide, index) => (
                <SwiperSlide className='relative' key={index}>
                    <img className='w-full h-full' src={slide?.image} alt={slide.alt} />
                    <h1 className='absolute top-[88%] left-[46%] text-xl font-bold text-primary'>{slide?.title}</h1>
                </SwiperSlide>
            ))}
            ...
        </Swiper>
    );
};

export default DynamicSlider;
