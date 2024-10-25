import React from 'react'
import DynamicSlider from '../../Shared/DynamicSlider/DynamicSlider'
import { Link } from 'react-router-dom'

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

    const products = [
        {
            id: "1",
            title: "Woven Labels",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052299_1541052299.jpg"
        },
        {
            id: "2",
            title: "Printed Fabric Labels",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546506827_1546506827.jpg"
        },
        {
            id: "3",
            title: "Screen Printed Labels",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546507720_1546507720.jpg"
        },
        {
            id: "4",
            title: "Heat Transfer Labels",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052388_1541052388.jpg"
        },
        {
            id: "5",
            title: "Paper Items (Price Ticket, Hangtags)",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1571196260_1571196260.jpg"
        },
        {
            id: "6",
            title: "Paper Packaging",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052442_1541052442.jpg"
        },
        {
            id: "7",
            title: "Adhesive Labels/Tags",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052514_1541052514.jpg"
        },
        {
            id: "8",
            title: "Barcode Labels & Stickers",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1546508362_1546508362.jpg"
        },
        {
            id: "9",
            title: "Rubber & Silicone Patch",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052616_1541052616.jpg"
        },
        {
            id: "10",
            title: "Jacron, PU & Leather Patch (Eco-Friendly)",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541053907_1541053907.jpg"
        },
        {
            id: "11",
            title: "Seal Cord/Plastic Clips/Loops",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052685_1541052685.jpg"
        },
        {
            id: "12",
            title: "RFID / EAS / Alarm Labels, Tags & Stickers",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1541052711_1541052711.jpg"
        },
        {
            id: "13",
            title: "Twill Tape & Elastic",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020801_1568020801.jpg"
        },
        {
            id: "14",
            title: "Jacquard Elastic",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020889_1568020889.jpg"
        },
        {
            id: "15",
            title: "Poly Bags",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568020964_1568020964.jpg"
        },
        {
            id: "16",
            title: "PVC / TPU / EVA Bags",
            image: "https://www.adzitrims.com/sul-web-cms-adzi/upload/image_upload_product_and_solutions_1568021093_1568021093.jpg"
        }
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
                    <div className='flex items-center pb-6 gap-3'>
                        <h1 className='text-[#2C3E50]  text-4xl font-bold' ><span className='text-black'>Our</span> Products</h1>
                        <p className='text-2xl pt-3'>(Delivering Brand Identification Solutions)</p>
                    </div>
                    <div className='border-b border-dashed border-black'>

                        <div className='w-[70px] h-[3px]  bg-black'></div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                        {
                            products?.map(product =>
                                <div key={product?.id} className="max-w-xs  bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div className="relative group">
                                        <img
                                            className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <Link to={`/products?pid=${ product?.id }`}>
                                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                        </Link>
                                    </div>
                                    <div className="p-4">
                                        <Link to={`/products?pid=${ product?.id }`}> {product.title}</Link>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Product
