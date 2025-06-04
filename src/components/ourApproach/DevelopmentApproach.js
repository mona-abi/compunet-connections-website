import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import snake from "../../images/ourApproach/snake.png";
import background from "../../images/ourApproach/secPageBg.png";

const sections = [
  {
    title: "UX Driven Engineering",
    description:
      "Projects are driven by designers & they make sure design & experiences translate to code.",
  },
  {
    title: "Proven Experience & Expertise",
    description: "Experienced team with industry-recognized certifications.",
  },
  {
    title: "Code Reviews",
    description:
      " With our code review services, you can boost your software’s reliability & maintainability, paving the way for successful project outcomes & a seamless user experience.",
  },
  {
    title: " Developing Shared Understanding",
    description:
      "We foster open communication to ensure all stakeholders share a clear vision.",
  },
  {
    title: " Security & Intellectual Property (IP)",
    description:
      " Our robust security solutions are designed to protect your sensitive data from evolving threats ensuring peace of mind.",
  },
  {
    title: "QA & Testing Services",
    description:
      "We focus on enhancing functionality, usability & security, delivering detailed reports & actionable insights for continuous improvement.",
  },
];

const DevelopmentApproach = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "130vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "3px",
            background: "linear-gradient(to right, #599ed4, #cc0000)",
          }}
        />
      </Box>

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: "black",
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Our design and <br />
        <span style={{ color: "black", fontWeight: "bold" }}>
          development approach
        </span>
      </Typography>

      {/* Snake Image in the Center */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "auto",
          zIndex: 2,
        }}
      >
        <img
          src={snake}
          alt="Design Flow"
          style={{ width: "80%", height: "auto", objectFit: "contain" }}
        />
      </Box>

      {/* Top 3 Content Items */}
      <Grid
        container
        spacing={3}
        sx={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          zIndex: 3,
        }}
      >
        {sections.slice(0, 3).map((section, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: "center", color: "black", width: "250px" }}>
              <Typography variant="h6" fontWeight="bold">
                {section.title}
              </Typography>
              <Typography variant="body2" fontSize="13px">
                {section.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Bottom 3 Content Items */}
      <Grid
        container
        spacing={3}
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "60%",
          transform: "translateX(-50%)",
          width: "80%",
          zIndex: 3,
        }}
      >
        {sections.slice(3, 6).map((section, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: "center", color: "black", width: "250px" }}>
              <Typography variant="h6" fontWeight="bold">
                {section.title}
              </Typography>
              <Typography variant="body2" fontSize="13px">
                {section.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DevelopmentApproach;
