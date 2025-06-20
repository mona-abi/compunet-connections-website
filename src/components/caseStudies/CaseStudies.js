import React from "react";
import banner from "../../images/casestudiesimg/cs.png";
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Container,
} from "@mui/material";
import chat from "../../images/contactImg/LogoWhite .png";
import image from "../../images/casestudiesimg/ba.png";
import image1 from "../../images/casestudiesimg/ba2.png";
import image2 from "../../images/casestudiesimg/ba3.png";
import image3 from "../../images/casestudiesimg/ba4.png";
import image4 from "../../images/casestudiesimg/ba5.png";
import image5 from "../../images/casestudiesimg/b6.png";
import image6 from "../../images/casestudiesimg/ba7.png";

const caseStudies = [
  // {
  //   title: "Tamil Nadu State Transport Authority",
  //   description:
  //     "It is a Web based supply chain management solution to connect 3,300 hospitals across the state.",
  //   cardBackgroundColor: "#FFF5D5",
  //   image: image,
  //   path:"/tnsta"
  // },
  {
    title: "Raqamyah, Saudi",
    description:
      "Peer-to-peer fintech company by Saudi Arabian Monetary Authority (SAMA) operating in Europe & Africa, Gulf Cooperation Council (GCC), Middle East.",
    cardBackgroundColor: "#F0FFF7",
    image: image1,
     path:"/raqamyah"
  },
  {
    title: "Retrex",
    description:
      "Award-winning Enterprise Mobile Application to manage half a million customers & 3,000 Field Executives.",
    cardBackgroundColor: "#E7DAED",
    imageBackgroundColor: "#CEC0FF",
    image: image3,
    path:"/retrex"
  },
  {
    title: "CMS, Australia",
    description:
      "Data Mining & analytics solution to help brands to analyse their retail sales across Australia.",
    cardBackgroundColor: "#CAEFFF",
    image: image2,
    path:"/cms"
  },
  
  {
    title: "Hinduja Leyland Finance",
    description:
      "A leading non-banking financial company in India, offering a comprehensive financial solution for commercial vehicles.",
    cardBackgroundColor: "#CCE8FF",
    imageBackgroundColor: "white",
    image: image4,
    path:"/hlf"
  },
  {
    title: "Tamil Nadu State AIDS Control Society (TANSACS)",
    description:
      "A Government of Tamil Nadu Department managing public transit, regulating entities & facilitating state projects.",
    cardBackgroundColor: "#E2F4FF",
    imageBackgroundColor: "#FFD2D2",
    
    image: image5,
    path:"/aids"
  },
  {
    title: "National Health Mission(NHM)",
    description:
      "Aims to provide accessible, affordable & quality healthcare to all citizens prioritizing rural areas.",
    cardBackgroundColor: "#FDFFE3",
    imageBackgroundColor: "#F4FF69",
    image: image6,
    path:"/nhm"
  },
];
const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          height: "90vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* <Paper
          sx={{
            position: "absolute",
            right: { xs: "5%", md: "10%" }, // Adjust position for responsiveness
            top: "50%",
            transform: "translateY(-50%)", // Centers vertically
            width: { xs: "90%", sm: "60%", md: "315px" },
            height: "100px",
            padding: { xs: 2, md: 4 },
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            fontSize={{ xs: "h6", sm: "h5", md: "h6" }}
          >
            Case Studies
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2, color: "white" }}>
            Driving Digital Transformation for our clients with scalable IT
            Solutions.
          </Typography>
        </Paper> */}
      </Box>

      <Container>
        <Box sx={{ padding: 4 }}>
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

          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Our Case Studies
          </Typography>
          
          <Grid container spacing={4}>
            {caseStudies.map((study, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: study.cardBackgroundColor,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardContent sx={{ padding: 2, flexGrow: 1 }}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        backgroundColor:
                          study.imageBackgroundColor || "transparent",
                        borderRadius: "8px",
                        padding: 2,
                        height: 180,
                      }}
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        style={{
                          maxHeight: "120%",
                          maxWidth: "120%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                      <Typography variant="h6" fontWeight="bold">
                        {study.title}
                      </Typography>
                      <Typography sx={{ minHeight: "80px", fontSize: "14px" }}>
                        {study.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ marginTop: "auto" }}>
                    <Button
                      onClick={()=>
                      {
                        navigate(study.path)
                        window.scrollTo(0,0)
                      }
                      }
                      variant="contained"
                      color="error"
                      fullWidth
                      sx={{ padding: "10px" }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Chat Button */}
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            padding: "10px 20px",
            color: "#000",
            fontWeight: "bold",
            border: "2px solid #599ed4",
            borderRadius: "15px 0 15px 0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <img src={chat} alt="Chat" style={{ width: 24, height: 24 }} />
          Talk to Us
        </Button>
      </Box>
    </>
  );
};

export default CaseStudies;
