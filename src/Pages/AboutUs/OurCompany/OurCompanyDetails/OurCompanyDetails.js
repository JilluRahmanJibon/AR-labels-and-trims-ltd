import React from "react";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

function OurCompanyDetails() {
  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1230px] w-[96%] mx-auto  py-[3rem] px-5  overflow-hidden">
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] [@media(min-width:400px)]:text-[22px] text-[19px] font-semibold">
            Our Company
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>

        <div className="rounded-[6px] shadow-[0_0px_9px_1px_#00000024]">
            <img src={CompanyImg} className="w-full !rounded-[13px]" />
          <p className="xl:!text-[15px] md:!text-[14px] [@media(min-width:400px)]:text-[13px] text-[12px] text-justify px-[10px] py-[5px]">
            <b>AR Labels & Trims Ltd</b>. is a leading garments accessories
            company that has been serving the thriving export-oriented garments
            industry in Bangladesh since 2013. We are committed to providing
            top-notch backward linkage support to the country's bustling apparel
            sector. At AR Labels & Trims Ltd., we specialize in the
            manufacturing and supply of high-quality garments accessories. Our
            extensive product range includes labels, trims, hang tags, etc and
            more. With our state-of-the-art machinery and a dedicated team of
            skilled professionals, we ensure the production of accessories that
            meet international standards. Our primary objective is to contribute
            to the success of the garment industry by delivering exceptional
            accessories that enhance the overall appeal and functionality of
            clothing products. We understand the importance of customized
            solutions and work closely with our clients to develop accessories
            that align with their specific requirements and branding guidelines.
            Quality is at the forefront of everything we do. We have implemented
            stringent quality control measures at every stage of production to
            ensure that our accessories meet the highest standards. Our
            commitment to excellence extends beyond manufacturing, as we strive
            to provide on-time delivery and exceptional customer service. As a
            customer-centric company, we prioritize building strong
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
        </div>
      </main>
    </div>
  );
}

export default OurCompanyDetails;
