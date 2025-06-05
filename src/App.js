import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import Careers from "./components/Careers/JobSearchPage";
import CaseStudies from "./components/CaseStudies";
import OurApproach from "./components/OurApproach";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Footer from "./pages/Footer/Footer";
import BlogsType from "./components/blogs/BlogsType";
import JobDetailsPage from "./components/Careers/JobDetailsPage";  // Import JobDetailsPage

export const baseUrl="/compunet";
const App = () => {
  return (
    <Router basename={baseUrl}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogsType />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-details/1" element={<JobDetailsPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;