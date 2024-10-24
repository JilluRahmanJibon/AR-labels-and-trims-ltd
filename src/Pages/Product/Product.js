import React from 'react'
import DynamicSlider from '../../Shared/DynamicSlider/DynamicSlider'

const Product = () =>
{
    const slides = [
        {
            title: "Woven Labels",
            image: 'https://www.adzitrims.com/sul-web-cms-adzi/upload/slider_image_upload_product_slider_1546747148_1546747148.jpg'
        },
        {
            title: "Woven Labels",
            image: 'https://www.adzitrims.com/sul-web-cms-adzi/upload/slider_image_upload_product_slider_1546747116_1546747116.jpg'
        },
        {
            title: "Woven Labels",
            image: 'https://www.adzitrims.com/sul-web-cms-adzi/upload/slider_image_upload_product_slider_1546747148_1546747148.jpg'
        },
    ]

    return (
        <section >
            <div className='mt-[100px] px-12 ' >
                <DynamicSlider slides={slides} />
            </div>
            <div className='bg-gray-50 py-6 px-12'>
                <div>
                    <h1 className='text-4xl pb-6'> <span className='border-b pb-2 border-black'>Woven</span> Labels</h1>
                    <p className='text-xl'>We offer you the latest, state of the art, air jet weaving technology to create high-definition quality labels, including the newest and trendiest weaves and textures in the market. Our creative team offers you innovative design solutions to fulfill the most recent fashion trend requirements at the quality and competitive pricing you need.</p>
                </div>
                <div className='py-6'>
                    <h1 className='text-[#2C3E50] text-4xl font-bold' ><span className='text-black'>Our</span> Products</h1>
                </div>
            </div>

        </section>
    )
}

export default Product
