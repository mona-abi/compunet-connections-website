import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import Careers from "./components/Careers/JobSearchPage";
import CaseStudies from "./components/caseStudies/CaseStudies";
import OurApproach from "./components/ourApproach/OurApproach";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Footer from "./pages/Footer/Footer";
import BlogsType from "./components/blogs/BlogsType";
import JobDetailsPage from "./components/Careers/JobDetailsPage"; 
import ApplyFormPage from "./components/Careers/ApplyFormPage";
import ApplicationSuccess from "./components/Careers/ApplicationSuccess";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/1" element={<BlogsType />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-details/1" element={<JobDetailsPage />} /> 
        <Route path="/apply" element={<ApplyFormPage />} /> 
        <Route path="/application-success" element={<ApplicationSuccess  />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;