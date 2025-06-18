import React from 'react';
import { Box, Typography } from '@mui/material';
import './OurApproach.css';
import img from "../../images/ourApproach/IMG.png"
import bg from "../../images/ourApproach/BG1.png"
import DevelopmentApproach from './DevelopmentApproach';
import Process from './Process';

function OurApproach() {
  return (
    <>
      <div>
        <Box 
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            height: { xs: "auto", md: "82vh" },
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Box className="content-container">
            <Typography variant="h4" className="heading">
              We simplify the process of <br />
              leveraging technology to <br />
              boost your business <br />
              efficiency
            </Typography>
            <Typography variant="body2" className="subtext">
              Our streamlined approach ensures you receive tailored <br />
              IT solutions that align with your goals.
            </Typography>
          </Box>

          <Box className="image-container">
            <img src={img} alt="Tech Team" className="main-image" />
          </Box>
        </Box>
      </div>

      <div>
        <Box
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#eef5fc",
            position: "relative",
            overflow: "hidden",
          }}
        ></Box>
      </div>

      <div>
        <DevelopmentApproach />
       
      </div>
      <div>
        <Process/>
      </div>
    
    </>
  );
}

export default OurApproach;
