import React from "react";
import { Box, Button } from "@mui/material";
import GetStarted from "./GetStarted";
import Service from "./Service";
import LeadingCompany from "./LeadingCompany";
import CompanyLogo from "./CompanyLogo";
import Feedback from "./Feedback";
import CaseStudy from "./CaseStudy";
import TechStack from "./TechStack";
import Working from "./Working";
import Milestone from "./Milestone";
import Design from "./DesignApp";
import Dash from "./Dash";
import Kural from "./Kural";

const Home = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Fixed position button */}
      <Button
        sx={{
          position: 'fixed',     
          bottom: 60,           
          right: 30,            
          color: '#fafafa',
          background: 'linear-gradient(to left, #599ed4, #cc0000)',
          fontWeight: 600,
          borderRadius: 1,
          padding: '5px 22px',
          fontSize: 12,
          zIndex: 1000,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
          
        }}
      >
        Book a call
      </Button>

      <GetStarted />
      {/* <Dash/> */}
      <Service />
      <Kural />
      <LeadingCompany />
      <CompanyLogo />
      <Feedback />
      <Milestone />
      <CaseStudy />
      <Design />
      <TechStack />
      <Working />
    </Box>
  );
};

export default Home;
