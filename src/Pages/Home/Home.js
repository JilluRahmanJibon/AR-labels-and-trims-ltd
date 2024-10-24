import React from "react";
import LandFooter from "./LandFooter/LandFooter";
import Banner from "./Banner/Banner";
import LandAbout from "./LandAbout/LandAbout";
import Branding from "./Branding/Branding";
import Experience from "./Experience/Experience";
import OurService from "./OurService/OurService";
import Manufacturing from "./Manufacturing/Manufacturing";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import FAQs from "./FAQs/FAQs";
import OurNewsLetter from "./OurNewsLetter/OurNewsLetter";
import Product from "../Product/Product";

const Home = () =>
{
  return (
    <main>
      <Product/>
      {/*  banner section  */}
      <Banner />
      {/* experience section  */}
      <Experience />
      {/* About Us section  */}
      <LandAbout />
      {/* service section  */}
      <OurService />
      {/* Manufacturing  */}
      <Manufacturing />
      {/* WhyChooseUs */}
      <WhyChooseUs />
      {/* Portfolio  */}
      <Portfolio />
      {/* Testimonials  */}
      <Testimonials />
      {/* FAQs  */}
      <FAQs />
      {/* Branding section  */}
      <Branding />
      {/* Our News Letter section  */}
      <OurNewsLetter />

      {/* footer section for landing page on the bottom */}
      <LandFooter />
    </main>
  );
};

export default Home;
