import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

// Lazy-loaded pages
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Industries = lazy(() => import("../Pages/Industries"));
const Products = lazy(() => import("../Pages/Products"));
const Blog = lazy(() => import("../Pages/Blog"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));

const AppRoutes = () => {
    return (
       <>
       <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about-us" element={<About />} />
                    <Route path="industries" element={<Industries />} />
                    <Route path="products" element={<Products />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="Contact-us" element={<ContactUs />} />
                </Routes>
            </div>
            <Footer />
        </div>
       </>
    );
};

export default AppRoutes;
