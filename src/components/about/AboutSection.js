import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircleOutline";
import About from "../../images/aboutimg/About.png"; 
import lead from '../../images/homeimg/lead.mp4';
const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#EAF4FF", // Light blue background
        padding: { xs: 3, md: 6 },
        py: { xs: 6, md: 12 }, // Added more space on top & bottom
        borderRadius: 3,
      }}
    >
      {/* Left Text Section */}
      <Box sx={{ flex: 1, maxWidth: "50%", paddingRight: { md: 4 } }}>
        <Box
          sx={{
            width: "40px",
            height: "3px",
            background: "linear-gradient(to right, #2563eb, red)",
            mb: 1,
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D1B2A" }}>
          Leading companies trust us <br />
          <span style={{ fontWeight: "bold", color: "#0D1B2A" }}>
            to develop software
          </span>
        </Typography>
        <Typography sx={{ fontSize: "18px", mt: 2, color: "#555", lineHeight: "1.6" }}>
          We <span style={{ color: "red", fontWeight: "bold" }}>add development capacity</span> to tech teams. Our value isn’t limited to
          building teams but is equally distributed across the project lifecycle.
          We are a custom software development company that guarantees the
          successful delivery of your project.
        </Typography>
        <Box
          sx={{
            width: "40px",
            height: "3px",
            background: "linear-gradient(to right, #2563eb, red)",
            mt: 2,
          }}
        />
      </Box>

      {/* Right Image Section */}
      <Box
        sx={{
          position: "relative",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          maxWidth: "50%",
        }}
      >
        <video
  src={lead}
  autoPlay
  muted
  loop
  playsInline
  style={{
    width: '100%',
    maxWidth: '28.125rem', // 450px = 28.125rem
    borderRadius: '0.75rem', // 12px = 0.75rem
    objectFit: 'cover',
    filter: 'blur(1.2px)',
    display: 'block',
  }}
/>
      </Box>
    </Box>
  );
};

export default AboutSection;
