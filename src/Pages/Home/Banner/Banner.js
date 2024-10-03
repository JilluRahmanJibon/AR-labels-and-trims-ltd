import React from 'react'
import DynamicSlider from '../../../Shared/DynamicSlider/DynamicSlider';

// Install modules
const Banner = () =>
{
    const sliderData = [
        { title: 'Slide 1', image: 'http://localhost:3000/static/media/ar-image.a22264bd26421aab3d1f.jpg' },
        { title: 'Slide 3', image: 'https://www.adzitrims.com/sul-web-cms-adzi/upload/slider_image_upload_product_slider_1546747987_1546747987.jpg' },
        // Add more slides as needed
    ];
    return (
        <div className='mb-6'>
            <DynamicSlider slides={sliderData} />
        </div>
    )
}

export default Banner
