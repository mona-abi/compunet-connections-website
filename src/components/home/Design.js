import React from "react";
import { Box, Typography} from "@mui/material";

import snake from "../../images/homeimg/snake.png"; 
import background from "../../images/homeimg/back.jpg"; 

const DesignApproach = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "calc(100vw - 20px)", 
        height: "100vh", 
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        marginLeft: "10px", 
        marginRight: "10px", 
      }}
    >
      <Box
        sx={{
          position: "relative",
          py: 5,
          height: "100%", 
          zIndex: 1, 
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold" sx={{ color: "white" }}>
          Our design and <span style={{ color: "#1565C0" }}>development approach</span>
        </Typography>
        <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
          <img
            src={snake}
            alt="Design Flow"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "absolute",
              zIndex: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DesignApproach;
