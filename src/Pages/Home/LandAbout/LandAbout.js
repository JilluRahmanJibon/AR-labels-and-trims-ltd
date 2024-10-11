import React from 'react'
import arImage from '../../../Assets/ar-image.jpg'; // Replace with actual image path

const LandAbout = () =>
{
    return (
        <section className=" py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={arImage} // Replace with the actual image URL
                        alt="About Us"
                        className="rounded-lg w-full max-h-96"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About AR-Labels & Trims Ltd.</h2>
                    <p className="text-gray-700 text-lg">
                        AR-Labels & Trims Ltd. is a modern, state-of-the-art apparel trims and accessories
                        manufacturer. Established in 2012 under the Indet Group, we began production in 2016
                        with a commitment to providing high-quality products to Bangladesh’s export-oriented
                        garment industries.
                    </p>
                    <p className="text-gray-700 mt-4 text-lg">
                        Our mission is to deliver world-class accessories with advanced technologies, supported
                        by a professional team, short lead times, and competitive pricing. We are dedicated to
                        ensuring customer satisfaction and maintaining the highest standards of integrity.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LandAbout
