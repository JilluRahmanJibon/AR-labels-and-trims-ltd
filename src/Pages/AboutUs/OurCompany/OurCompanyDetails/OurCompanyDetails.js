import React from "react";
import CompanyImg from "../../../../Assets/AboutUs/vision_image_upload__1550049671_1550049671.jpg";

function OurCompanyDetails() {
  return (
    <main className="xl:w-[1230px] w-[96%] mx-auto  pb-[3rem] px-5">
      <img src={CompanyImg} className="w-full" />

      <div className="">
        <p className="xl:!text-[15px] md:!text-[14px] [@media(min-width:400px)]:text-[13px] text-[12px] text-justify GeologicaFont">
          <b>AR Labels & Trims Ltd</b>. is a leading garments accessories
          company that has been serving the thriving export-oriented garments
          industry in Bangladesh since 2013. We are committed to providing
          top-notch backward linkage support to the country's bustling apparel
          sector. <br />
          At AR Labels & Trims Ltd., we specialize in the manufacturing and
          supply of high-quality garments accessories. Our extensive product
          range includes labels, trims, hang tags, etc and more. With our
          state-of-the-art machinery and a dedicated team of skilled
          professionals, we ensure the production of accessories that meet
          international standards.
          <br />
          Our primary objective is to contribute to the success of the garment
          industry by delivering exceptional accessories that enhance the
          overall appeal and functionality of clothing products. We understand
          the importance of customized solutions and work closely with our
          clients to develop accessories that align with their specific
          requirements and branding guidelines.
          <br />
          Quality is at the forefront of everything we do. We have implemented
          stringent quality control measures at every stage of production to
          ensure that our accessories meet the highest standards. Our commitment
          to excellence extends beyond manufacturing, as we strive to provide
          on-time delivery and exceptional customer service.
          <br />
          As a customer-centric company, we prioritize building strong
          relationships with our clients. We listen to their needs, provide
          expert advice, and offer innovative solutions to help them achieve
          their business objectives. Our reliable distribution network enables
          us to efficiently cater to the demands of our customers both
          domestically and internationally.
          <br />
          With our continuous focus on innovation, productivity, and quality
          improvement, AR Labels & Trims Ltd. has established itself as a
          trusted name in the garments accessories industry. We take pride in
          our accomplishments and look forward to serving our valued clients
          with unwavering dedication and excellence.
        </p>
      </div>
    </main>
  );
}

export default OurCompanyDetails;
