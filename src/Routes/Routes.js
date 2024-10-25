import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurCompany from "../Pages/AboutUs/OurCompany/OurCompany";
import MissionVision from "../Pages/AboutUs/MissionVision/MissionVision";
import ARLabelsFamily from "../Pages/AboutUs/ARLabelsFamily/ARLabelsFamily";
import EthicsValues from "../Pages/AboutUs/EthicsValues/EthicsValues";
import Affiliations from "../Pages/AboutUs/Affiliations/Affiliations";
import ClientReferences from "../Pages/AboutUs/ClientReferences/ClientReferences";
import Product from "../Pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      // Contact Us
      { path: "/contactUs", element: <ContactUs /> },
      // About Us
      { path: "/about-our-company", element: <OurCompany /> },
      { path: "/about-mission-vision", element: <MissionVision /> },
      { path: "/about-ar-labels-family", element: <ARLabelsFamily /> },
      { path: "/about-ethics-values", element: <EthicsValues /> },
      { path: "/about-affiliations", element: <Affiliations /> },
      { path: "/about-client-references", element: <ClientReferences /> },
      // products 
      {
        path: `/products?pid=1`, element: <Product />
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
