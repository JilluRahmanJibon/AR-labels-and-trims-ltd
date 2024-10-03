import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF } from 'react-icons/fa'; // Import icons

const LandFooter = () =>
{
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                        <p className="mb-2">
                            <strong>Head Office Address:</strong> <br />
                            Tropical Alauddin Tower, Flat # 14/A, House# 32/C, Road# 02, Sector #3, Uttara-1230, Dhaka, Bangladesh.
                        </p>
                        <p>
                            <strong>Factory Address:</strong> <br />
                            Dag No: 3809, Vill+Mouza: Nalvugh, Nishadnagar, Turag, Dhaka, Bangladesh.
                        </p>
                    </div>

                    {/* Contact Methods with Icons */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Call or Email Us</h2>
                        <p className="mb-2 flex items-center">
                            <FaPhoneAlt className="mr-2 text-primary" /> {/* Phone Icon */}
                            <strong>Call Us:</strong> <br />
                            +880 1971 069 500
                        </p>
                        <p className="mb-2 flex items-center">
                            <FaEnvelope className="mr-2 text-primary" /> {/* Email Icon */}
                            <strong>Email Us:</strong> <br />
                            <a href="mailto:info@adzitrims.com" className="text-primary hover:underline">info@adzitrims.com</a>
                        </p>
                        <p className="flex items-center">
                            <FaFacebookF className="mr-2 text-primary" /> {/* Facebook Icon */}
                            <strong>Facebook Feed:</strong> <br />
                            <a href="https://facebook.com" className="text-primary hover:underline">Follow us on Facebook</a>
                        </p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
                        <p className="mb-4">Join our newsletter</p>
                        <form>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 mb-4 text-gray-900 rounded-md focus:outline-none"
                            />
                            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-sm">* We won't share it with third party.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default LandFooter;
