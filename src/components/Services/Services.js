import React from "react";
import { Box, Typography } from "@mui/material";
import background from "../../images/servicesimg/img2.png"; // Background Image
import serviceImage from "../../images/servicesimg/img1.png"; // Side Image
import Web from "./Web";
import Mobile from "./Mobile";
import Cyber from "./Cyber";
import Data from "./Data";
import Digital from "./Digital";
import Oddo from "./Oddo";
import Staffing from "./Staffing";
import Testing from "./Testing";
import PricingPlans from "./PricingPlans";

const Services = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
      {/* Services Section with Background Image */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "900px",
            backgroundColor: "white",
            boxShadow: 3,
            borderRadius: 2,
            p: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #CC0000, #599ED4)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline",
              }}
            >
              SERVICES
            </Typography>
            <Typography sx={{ fontSize: "18px", mt: 2, textAlign: "justify", color: "#555" }}>
              Compunet Connections's journey began when founder Kavitha VB discovered an urgent need on the
              market for great Software Development Services. If you're a Founder or Entrepreneur in Retail,
              Healthcare, or Consumer Services struggling with efficient customer service and low maintenance
              costs, you're not alone. Many companies faced the same issues, so we created a solution.
              Compunet Connections helps businesses improve efficiency and reduce maintenance costs.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", mt: { xs: 3, md: 0 } }}>
            <img src={serviceImage} alt="Services" style={{ width: "90%", borderRadius: "10px" }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Web />
        <Mobile />
        <Cyber />
        <Data />
        <Digital />
        <Oddo />
        <Staffing />
        <Testing />
        <PricingPlans />
      </Box>
    </Box>
  );
};

export default Services;
