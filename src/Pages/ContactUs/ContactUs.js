import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import ContactMap from "./ContactMap/ContactMap";
import OurNewsLetter from "../Home/OurNewsLetter/OurNewsLetter";
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactUs = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State for form submission
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with your backend API
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="xl:min-h-screen xl:flex items-center xl:mt-0 mt-16 justify-center p-4">
        <div className=" rounded-lg w-full flex flex-col lg:flex-row overflow-hidden">
          {/* Left Side: Company Information */}
          <div className="w-full lg:w-1/2 p-6 bg-primary text-gray-200">
            <h2 className="text-3xl font-bold mb-4">AR-Labels & Trims Ltd.</h2>
            <p className="mb-6">
              We are a leading garments factory specializing in high-quality
              labels and trims for the fashion industry. Our commitment to
              excellence ensures that your products stand out in the market.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="mt-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                123 Fashion Ave, Dhaka, Bangladesh
              </p>
              <p className="mt-2 flex items-center">
                <FaPhone className="mr-2" />
                +880 1234 567890
              </p>
              <p className="mt-2 flex items-center">
                <FaEnvelope className="mr-2" />
                contact@arlabels.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-primaryLight">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-primaryLight">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-primaryLight">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="hover:text-primaryLight">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                Thank you for contacting us! We'll get back to you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject of your message"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full hover:bg-primary text-white p-2 rounded-md bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*  Contact Information section  */}
      <ContactInfo />

      {/*  Map section  */}
      <ContactMap />

      {/*  Our News Letter section  */}
      <OurNewsLetter />
    </>
  );
};

export default ContactUs;
