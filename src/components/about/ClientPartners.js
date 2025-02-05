import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo1 from "../../images/aboutimg/logo1.png";
import logo2 from "../../images/aboutimg/logo2.png";
import logo3 from "../../images/aboutimg/logo3.png";
import logo4 from "../../images/aboutimg/logo4.png";
import logo5 from "../../images/aboutimg/logo5.png";
import logo6 from "../../images/aboutimg/logo6.png";
import logo7 from "../../images/aboutimg/logo7.png";
import logo8 from "../../images/aboutimg/logo8.png";
import logo9 from "../../images/aboutimg/logo9.png";
import logo10 from "../../images/aboutimg/logo10.png";
import logo11 from "../../images/aboutimg/logo11.png";
import logo12 from "../../images/aboutimg/logo12.png";

const ClientPartners = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "auto", backgroundColor: "#f0f4f8", pb: 4 }}>
      {/* Light Blue AppBar */}
      <AppBar position="relative" sx={{ backgroundColor: "#d0e4fc", height: "130px", boxShadow: "none" }}>
        <Toolbar />
        <Box
          sx={{
            position: "absolute",
            top: "65px",
            left: 0,
            width: "30%",
            height: "65px",
            background: "linear-gradient(to right, #c90000, #2563eb)",
            clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Our Client Partners
          </Typography>
        </Box>
      </AppBar>

      {/* Client Logos Section */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "40px 20px",
          backgroundColor: "white",
          justifyItems: "center",
        }}
      >
        {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12].map(
          (imgSrc, index) => (
            <Box key={index} sx={{ width: "150px", height: "auto" }}>
              <img src={imgSrc} alt={`Client Logo ${index + 1}`} style={{ width: "100%", height: "auto" }} />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default ClientPartners;
