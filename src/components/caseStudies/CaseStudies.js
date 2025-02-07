import React from "react";

import banner from "../../images/casestudiesimg/Banner.png";
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
import image5 from "../../images/casestudiesimg/ba6.png";
import image6 from "../../images/casestudiesimg/ba7.png";
const caseStudies = [
  {
    title: "Tamil Nadu State Transport Authority",
    description:
      "It is a Web based supply chain management solution to connect 3,300 hospitals across the state.",
    cardBackgroundColor: "#FFF5D5",
    image: image,
  },
  {
    title: "Raqamyah, Saudi",
    description:
      "Peer-to-peer fintech company by Saudi Arabian Monetary Authority (SAMA) operating in Europe & Africa, Gulf Cooperation Council (GCC), Middle East.",
    cardBackgroundColor: "#F0FFF7",
    image: image1,
  },
  {
    title: "CMS, Australia",
    description:
      "Data Mining & analytics solution to help brands to analyse their retail sales across Australia.",
    cardBackgroundColor: "#CAEFFF",
    image: image2,
  },
  {
    title: "Retrex",
    description:
      "Award winning Enterprise Mobile Application to manage half a million of customers & 3,000 Field Executives.",
    cardBackgroundColor: "#E7DAED",
    imageBackgroundColor: "#CEC0FF",

    image: image3,
  },
  {
    title: "Hinduja Leyland Finance",
    description:
      "A leading non-banking financial company in India, offering a comprehensive financial solutions for commercial vehicles",
    cardBackgroundColor: "#CCE8FF",
    imageBackgroundColor: "#8ECBFF",
    image: image4,
  },
  {
    title: "Tamil Nadu State AIDS Control Society (TANSACS)",
    description:
      "A Government of Tamil Nadu Department manages public transit, regulates entities & facilitates state projects.",
    cardBackgroundColor: "#FFD2D2",
    imageBackgroundColor: "#FFF",
    image: image5,
  },
  {
    title: "National Health Mission(NHM)",

    description:
      "Aims to provide accessible, affordable & quality healthcare to all citizens prioritizing rural areas.",
    cardBackgroundColor: "#FDFFE3",
    imageBackgroundColor: "#F4FF69",
    image: image6,
  },
];
const CaseStudies = () => {
  return (
    <>
      <div>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          height: { xs: "50vh", md: "100vh" },
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            right: { xs: "5%", md: "10%" },
            top: "50%",
            transform: "translateY(-50%)",
            width: { xs: "90%", sm: "60%", md: "315px" },
            height: "auto",
            padding: { xs: 2, md: 4 },
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Case Studies
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Driving Digital Transformation for our clients with scalable IT Solutions.
          </Typography>
        </Paper>
      </Box>


      </div>

      <div>
        <Container>
          <Box sx={{ padding: 4 }}>
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
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      backgroundColor: study.cardBackgroundColor,
                      height: "100%", // Ensures all cards have equal height
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ padding: 0, flexGrow: 1 }}>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          backgroundColor: study.imageBackgroundColor,
                          borderRadius: "8px",
                        }}
                      >
                        <img
                          src={study.image}
                          alt={study.title}
                          style={{ height: 240 }}
                        />
                      </Box>
                      <Box sx={{ padding: "20px", flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                          {study.title}
                        </Typography>
                        <Box sx={{ minHeight: "80px" }}>
                          <Typography>{study.description}</Typography>
                        </Box>
                      </Box>
                    </CardContent>

                    <CardActions sx={{ marginTop: "auto" }}>
                      <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        sx={{ paddingTop: "10px" }}
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
      </div>
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
