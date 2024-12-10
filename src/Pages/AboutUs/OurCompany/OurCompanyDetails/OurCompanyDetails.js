import React from "react";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

function OurCompanyDetails ()
{
  return (
    <div className="bg-white font-geologica">
      <main className="max-w-[1230px] w-[96%] mx-auto py-12 px-5 overflow-hidden">
        {/* Header Section */}
        <header className="text-center text-black relative z-10 pb-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Our Company
          </h1>
          <div className="flex items-center mt-1 justify-center">
            <div className="w-4 h-[2px] sm:w-5 sm:h-[3px] bg-pink-500 inline-flex"></div>
            <div className="w-5 h-[5px] sm:w-6 sm:h-[6px] mx-1 bg-teal-600 inline-flex"></div>
            <div className="w-4 h-[2px] sm:w-5 sm:h-[3px] bg-pink-500 inline-flex"></div>
          </div>
        </header>

        {/* Content Section */}
        <section className="rounded-md shadow-md">
          <img
            src={CompanyImg}
            alt="Company Overview"
            className="w-full rounded-lg"
            loading="lazy"
          />
          <p className="text-sm sm:text-base lg:text-lg text-justify px-4 py-2">
            <b>AR Labels & Trims Ltd.</b> is a leading garments accessories
            company that has been serving the thriving export-oriented garments
            industry in Bangladesh since 2013. We are committed to providing
            top-notch backward linkage support to the country's bustling apparel
            sector. At AR Labels & Trims Ltd., we specialize in the
            manufacturing and supply of high-quality garments accessories. Our
            extensive product range includes labels, trims, hang tags, and more.
            <br /><br />
            With our state-of-the-art machinery and a dedicated team of skilled
            professionals, we ensure the production of accessories that meet
            international standards. Our primary objective is to contribute to
            the success of the garment industry by delivering exceptional
            accessories that enhance the overall appeal and functionality of
            clothing products. We understand the importance of customized
            solutions and work closely with our clients to develop accessories
            that align with their specific requirements and branding guidelines.
            <br /><br />
            Quality is at the forefront of everything we do. We have implemented
            stringent quality control measures at every stage of production to
            ensure that our accessories meet the highest standards. Our
            commitment to excellence extends beyond manufacturing, as we strive
            to provide on-time delivery and exceptional customer service.
            <br /><br />
            As a customer-centric company, we prioritize building strong
            relationships with our clients. We listen to their needs, provide
            expert advice, and offer innovative solutions to help them achieve
            their business objectives. Our reliable distribution network enables
            us to efficiently cater to the demands of our customers both
            domestically and internationally. With our continuous focus on
            innovation, productivity, and quality improvement, AR Labels & Trims
            Ltd. has established itself as a trusted name in the garments
            accessories industry. We take pride in our accomplishments and look
            forward to serving our valued clients with unwavering dedication and
            excellence.
          </p>
        </section>
      </main>
    </div>
  );
}

export default OurCompanyDetails;
