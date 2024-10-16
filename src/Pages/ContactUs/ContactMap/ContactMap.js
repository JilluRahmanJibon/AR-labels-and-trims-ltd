import React from "react";

const ContactUs = () => {
  return (
    <main
      className={`w-[100%] h-[100%] flex items-center justify-center bg-white`}
    >
      <div className="container mx-auto text-center GeologicaFont py-[4rem]">
        <h1 className="font-[700] md:text-[29px] sm:text-[24px] text-[20px] mx-auto text-[#018496]">
          Our Location
          {/* Our Support Guys or */}
          {/* <br className="sm:block hidden" /> Make Appointment With Our Consultan */}
        </h1>
        {/* <div className="w-[6rem] h-[3px] my-[10px] bg-[#58B4F9] inline-flex"></div> */}
        <p className="font-[500] md:text-[16px] sm:text-[14px] text-[13px] text-[#232323] mx-auto [@media(min-width:460px)]:px-[0.5rem] [@media(min-width:350px)]:px-[20px] px-[10px] md:leading-[20px] leading-[15px]">
          Please contact us using the information below.
          <br className="[@media(min-width:460px)]:block hidden"/> For additional information on our management consulting
          services,
          <br className="[@media(min-width:460px)]:block hidden"/> please visit the appropriate page on our site.
        </p>

        <div className="flex w-[100%] mx-auto justify-center sm:pt-[3rem] pt-[1.1rem] md:px-0 px-[1rem]">
          <iframe
            className="w-full h-[30rem] border-0"
            title="AR-Labels & Trim Ltd. Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28945.194910238122!2d89.92727748309258!3d24.92698113466775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd7f432d79ab59%3A0xba4e9a6ed6f6682c!2sJamalpur!5e0!3m2!1sen!2sbd!4v1728657417632!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
