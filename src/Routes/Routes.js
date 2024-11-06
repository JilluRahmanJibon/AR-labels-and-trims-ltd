import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AdminLayout from "../Layout/AdminLayout";
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
import NewsEvents from "../Pages/NewsEvents/NewsEvents";
import AvailablePositions from "../Pages/Careers/AvailablePositions/AvailablePositions";
import ApplyOnline from "../Pages/Careers/ApplyOnline/ApplyOnline";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Certifications from "../Pages/Sustainability/Certifications";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import AdminDashboardAllProduct from "../Pages/AdminDashboard/AdminDashboardAllProduct/AdminDashboardAllProduct";
import AdminDashboardAddProduct from "../Pages/AdminDashboard/AdminDashboardAddProduct/AdminDashboardAddProduct";
import UpdateProduct from "../Pages/AdminDashboard/AdminDashboardAllProduct/UpdateProduct";

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
        path: `/products/:pid`, element: <Product />
      },
      // News Events
      { path: "/news-events", element: <NewsEvents /> },
      // Careers
      { path: "/available_positions", element: <AvailablePositions /> },
      { path: "/apply_online", element: <ApplyOnline /> },
      // Login & Sign In
      { path: "/login", element: <Login /> },
      { path: "/sign_up", element: <SignUp /> },
      // Certifications
      { path: "/certifications", element: <Certifications /> },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Dashboard Home
      { path: "/superAdmin/dashboard", element: <AdminDashboard /> },


      // Dashboard All Products
      { path: "/dashboard/product-solutions/all-products", element: <AdminDashboardAllProduct /> },
      // update product 
      { path: "/dashboard/product-solutions/update/:pid", element: <UpdateProduct /> },
      // Dashboard Add Product
      { path: "/dashboard/product-solutions/add-product", element: <AdminDashboardAddProduct /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
