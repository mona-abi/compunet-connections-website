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
import JobDetailsPage from "./components/Careers/JobDetailsPage";  // Import JobDetailsPage
import ApplyFormPage from "./components/Careers/ApplyFormPage";
import ApplicationSuccess from "./components/Careers/ApplicationSuccess";
import Book from "./components/Book/Book";
import ScrollTop from "./components/ScrollTop";
import Raqamyah from "./components/caseStudies/raqamyah";
import Cms from "./components/caseStudies/Cms";
import Retrex from "./components/caseStudies/Retrax";
import Nhm from "./components/caseStudies/Nhm";
import Hlf from "./components/caseStudies/Hlf";
import Aids from "./components/caseStudies/Aids";










export const baseUrl="/compunet";
const App = () => {
  return (
    <Router basename={baseUrl}>
      <ScrollTop/>
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
        <Route path="/Book" element={<Book />} />
        <Route path="/raqamyah" element={<Raqamyah />} />
        <Route path="/cms" element={<Cms />} />
        <Route path="/aids" element={<Aids/>} />
        <Route path="/nhm" element={<Nhm />} />
        <Route path="/hlf" element={<Hlf />} />
        <Route path="/retrex" element={<Retrex />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;