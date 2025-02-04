import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/service/Services";
import Careers from "./components/Careers/JobSearchPage";
import CaseStudies from "./components/CaseStudies";
import OurApproach from "./components/OurApproach";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Footer from './pages/Footer/Footer'
import BlogsType from "./components/blogs/BlogsType";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogsType />} /> {/* Add this route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
