import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import meet1 from "../../images/meetimg/meet1.png";
import meet2 from "../../images/meetimg/meet2.png";
import meet3 from "../../images/meetimg/meet3.png";
import meet4 from "../../images/meetimg/meet4.png";

const Meet = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "50vh" }}>
      {/* Header Section */}
      <AppBar position="absolute" sx={{ backgroundColor: "#E8F5FF", boxShadow: "none",height:"130px" }}>
        <Toolbar />

        {/* Overlapping Banner */}
        <Box
          sx={{
            position: "absolute",
            top: "50px",
            left: 0,
            width: "40%",
            height: "80px",
            background: "linear-gradient(to right, #c90000, #2563eb)",
            clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: "lighter" }}>
            Meet the People <br />
            <span style={{ fontWeight: "bold" }}>We are Working With</span>
          </Typography>
        </Box>
      </AppBar>

      {/* Logos Section */}
      <Box
        sx={{
          position: "absolute",
          top: "180px", // Position below the banner
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {[meet1, meet2, meet3, meet4].map((imgSrc, index) => (
          <Box key={index} sx={{ width: "180px", height: "80px", overflow: "hidden" }}>
            <img
              src={imgSrc}
              alt={`Meet ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Meet;
