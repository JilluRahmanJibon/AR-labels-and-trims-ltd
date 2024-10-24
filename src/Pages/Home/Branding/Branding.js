import React from "react";
import brandLogo from "../../../Assets/brandLogo.png";

const Branding = () => {
  return (
    <main>
      <section class="text-gray-600 body-font bg-gray-100 GeologicaFont">
        <div class="xl:w-[1230px] w-[100%] px-5 py-[2rem] mx-auto">
          <div class="w-[95%] mx-auto flex flex-wrap items-center">
            <img
              alt="ecommerce"
              class="md:w-1/2 sm:w-[460px] w-[100%] lg:h-auto h-[100%] object-cover object-center md:m-0 m-auto"
              src={brandLogo}
            />
            <div class="md:w-1/2 sm:w-[460px] w-[100%]  md:text-left text-center md:m-0 m-auto">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-[8px]">
                Sustainable branding <br />
                from stitch to store
              </h1>

              <p class="leading-[22px] pb-[8px] text-[15px]">
                Looking to achieve your sustainability and branding targets?
                We’ll help you get there with our range of eco-friendly
                packaging and trims.
              </p>
              <p class="leading-[22px] text-[15px]">
                As your branding partner, we’ll design, develop and deliver your
                products globally through an infrastructure that benefits you.
                The result? A sustainable supply chain. Consistent and impactful
                branding. High quality. Innovative materials.
              </p>
              <button class="text-white hover:text-primary bg-primary border-[2px] border-primary py-2 px-6 focus:outline-none hover:bg-transparent rounded-[50px] transition-[0.3s] mt-[10px]">
                Our sustainability commitment
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
