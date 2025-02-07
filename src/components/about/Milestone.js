import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import background from "../../images/aboutimg/bg.png";

const Milestones = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Light Blue AppBar */}
      <AppBar position="absolute" sx={{ backgroundColor: "#d0e4fc", height: "130px", boxShadow: "none" }}>
        <Toolbar />
      

      {/* Overlapping Red & Blue Box */}
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
          Milestones
        </Typography>
      </Box>
      </AppBar>

      <Box
        sx={{
          position: "absolute",
          top: "130px", // Adjust this value based on the height of the previous box
          right: 0,
          width: "100%",
          height: "calc(100vh - 130px)", // Take the remaining height
          backgroundImage: `url(${background})`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
</Box>

  );
};

export default Milestones;
