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
import logo13 from "../../images/aboutimg/logo13.png";
import logo14 from "../../images/aboutimg/logo14.png";

const ClientPartners = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14];

  return (
    <Box sx={{ position: "relative", width: "100%", height: "auto", backgroundColor: "#f0f4f8", pb: 0, mb: 0 }}>
      {/* Light Blue AppBar */}
      <AppBar position="relative" sx={{ backgroundColor: "#d0e4fc", height: "130px", boxShadow: "none" }}>
        <Toolbar />
        <Box
          sx={{
            position: "absolute",
            top: "50px",
            left: 0,
            width: "40%",
            height: "80px",
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
      <Box sx={{ backgroundColor: "white", padding: "40px 20px" }}>
        {/* Row 1: 4 Images */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
          gap: "20px",
          justifyItems: "center"
        }}>
          {logos.slice(0, 4).map((imgSrc, index) => (
            <Box key={index} sx={{ width: "150px", height: "auto" }}>
              <img src={imgSrc} alt={`Client Logo ${index + 1}`} style={{ width: "100%", height: "auto" }} />
            </Box>
          ))}
        </Box>

        {/* Row 2: 4 Images */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
          gap: "20px",
          justifyItems: "center",
          mt: 2
        }}>
          {logos.slice(4, 8).map((imgSrc, index) => (
            <Box key={index + 4} sx={{ width: "150px", height: "auto" }}>
              <img src={imgSrc} alt={`Client Logo ${index + 5}`} style={{ width: "100%", height: "auto" }} />
            </Box>
          ))}
        </Box>

        {/* Row 3: 6 Images */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
          gap: "20px",
          justifyItems: "center",
          mt: 2
        }}>
          {logos.slice(8, 14).map((imgSrc, index) => (
            <Box key={index + 8} sx={{ width: "150px", height: "auto" }}>
              <img src={imgSrc} alt={`Client Logo ${index + 9}`} style={{ width: "100%", height: "auto" }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom Box (Remove Extra Space) */}
      <Box sx={{ backgroundColor: "#d0e4fc", height: "65px", boxShadow: "none", mb: 0, pb: 0 }} />
    </Box>
  );
};

export default ClientPartners;
