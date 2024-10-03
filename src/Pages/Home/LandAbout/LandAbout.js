import React from 'react'
import arImage from '../../../Assets/ar-image.jpg'; // Replace with actual image path

const LandAbout = () =>
{
    return (
        <main>
            <section className=" py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Left side: Text */}
                        <div>
                            <h2 className="text-3xl  text-gray-800 mb-6"><span className='font-bold border-b pb-3 border-gray-800'>About</span> Us</h2>
                            <p className="text-gray-700 mb-4">
                                Adzi Trims Ltd. is a modern state of the art ‘one stop solution’ apparel trims and accessories manufacturer which started its primary journey in the year of 2012 under the umbrella of Indet Group. It has started its trims & accessories production unit at the end of 2016 with a view to providing backward linkage support to country’s bustling export oriented garment industries.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Adzi Trims has started with a firm determination to manufacture international standard quality apparel accessories products. Our facility is equipped with all modern, latest & state of the art machineries & technologies and backed up with a team of trained, passionate and professional human resources.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our management team is not only highly skilled & experienced but also filled with extensive industry knowledge with firm business acumen. In today’s competitive world with such a diverse & demanding garments industry in Bangladesh, our customers look for flexible services with high quality products, short lead time and of course with reasonable prices.
                            </p>
                            <p className="text-gray-700">
                                We have truly established ourselves to meet these requirements and we strongly believe we will continue to serve these requirements with utmost trust, satisfaction and high integrity.
                            </p>
                        </div>

                        {/* Right side: Image */}
                        <div>
                            <img
                                src={arImage} // Replace with the actual image path
                                alt="About Us"
                                className="w-full h-auto rounded-lg  object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LandAbout
