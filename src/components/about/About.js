import React from "react";
import { Box, Typography } from "@mui/material";
import background from "../../images/aboutimg/bg1.png"; 
import Hero from "../../images/aboutimg/Hero.png";
import GetToKnow from "./GetToKnow";
import LeadershipTeam from "./LeaderShipTeam";
import Milestone from "./Milestone";
import Meet from "./Meet";
import ClientPartners from "./ClientPartners";
import AboutSection from "./AboutSection";

const AboutUs = () => {
  return (
    <Box 
      sx={{ 
        width: "100%", 
        backgroundColor: "#f5f5f5", 
        position: "relative",
        overflow: "hidden",  // Prevents extra space on the right
      }}
    >
      {/* About Us Section with Background Image */}
      <Box
        sx={{
          width: "100%",  // Ensure full width usage
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          px: 2, 
        }}
      >
        {/* Bigger Content Box */}
        <Box
          sx={{
            width: "85%", 
            maxWidth: "1000px", 
            backgroundColor: "white",
            boxShadow: 3,
            borderRadius: 2,
            p: 3, 
            textAlign: "left", 
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack content on smaller screens
            alignItems: "center",
            position: "relative",
            zIndex: 2, 
            marginLeft: "-5%",  // Adjusted from -20% to avoid unnecessary shift
          }}
        >
          {/* Left Side Content (Text Area) */}
          <Box sx={{ flex: 1, maxWidth: "100%" }}> 
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#c90000", textAlign: "center" }}>
              ABOUT <span style={{ color: "#2563eb" }}>US</span>
            </Typography>
            <Typography  sx={{ fontSize: "20px", mt: 3, textAlign: "justify", color: "#555", lineHeight: "1.6",  }}>
              A quick spotlight on everything we have digitally transformed & how we do it. Small-Sized Businesses & 
              their un-met technology needs can only be satisfied with flexible experiments & personal attention, not 
              stringent processes & standard operating protocols. 
            
              We want to ensure to bring technology solutions to your business & projects on your terms & timelines, not ours!
            </Typography>
          </Box>

          {/* Right Side Image (inside the content box) */}
          <Box sx={{ 
            mt: { xs: 4, md: 0 }, // Add margin top on small screens
            width: "100%", 
            maxWidth: "500px", // Limit the image size
            height: "auto", 
            display: "flex", 
            justifyContent: "center",
            mb: "-100px", 
            mr:-10
          }}>
            <img 
              src={Hero} 
              alt="Hero" 
              style={{ 
                width: "100%", 
                borderRadius: "10px",
              }} 
            />
          </Box>
        </Box>
      </Box>

      {/* Other Sections */}
      <Box>
        <AboutSection />
        <GetToKnow />
        <LeadershipTeam />
        <Milestone />
        <Meet />
        <ClientPartners />
      </Box>
    </Box>
  );
};

export default AboutUs;
