import React from "react";
import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import chat from '../../images/contactImg/LogoWhite .png';
import icon1 from '../../images/aboutimg/icons1.svg';
import icon2 from '../../images/aboutimg/icon2.svg';
import icon3 from '../../images/aboutimg/icon3.svg';
import img from '../../images/contactImg/Ellipse.png';

const GetToKnow = () => {
  const cards = [
    {
      icon: (
        <img
          src={icon1}
          alt="Who we are Icon"
        />
      ),
      title: "Who we are",
      description:
        "Compunet Connections was founded by industry veterans with a vision to provide a world-class software services using latest technologies to customers across the globe. We strive to be at the forefront of getting the best for our clients using Digital Transformation."
    },
    {
      icon: (
        <img
          src={icon2}
          alt="Our History Icon"
        />
      ),
      title: "Our History",
      description: "Established in 2004, Compunet has been providing Digital Transformation Solutions with People first approach to clients in the Banking, Retail, eCommerce & Government Agencies. Our services include Application Development, Application Maintenance, Data Warehousing Platform Modernisation & Analytics and IT Staffing Solutions."
    },
    {
      icon: (
        <img
          src={icon3}
          alt="Our Mission Icon"
        />
      ),
      title: "Our Missions",
      description: "At Compunet Connections, our mission is to provide the right solutions to our clients while also providing a superior customer experience. We are committed to helping our customers succeed by delivering effective, reliable, and scalable solutions that drive growth."
    }
  ];

  return (
    <div>
      <Box sx={{ backgroundColor: "#FFFFFF", py: 8, px: 4, position: "relative" }}>
        {/* Background Circles */}
        <Box
          sx={{
            position: 'absolute',
            top: '70px',
            right: '10px',
            width: '157px',
            height: '162px',
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            opacity: 0.1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '313px',
            left: '399px',
            width: '207px',
            height: '220px',
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            opacity: 0.1,
          }}
        />

        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center", color: "#cc0000", mb: 4, margin: '-34px' }}>
          GET TO KNOW <span style={{ color: "#599ed4" }}>US MORE</span>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#000",
              fontWeight: "bold",
              border: "2px solid #599ed4",
              borderRadius: "15px 0 15px 0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",  // Adjusted padding for better mobile experience
              fontSize: { xs: "14px", sm: "16px" }, // Font size adjustment for mobile
            }}
          >
            <img src={chat} alt="Chat" style={{ width: 24, height: 24 }} />
            Talk to Us
          </Button>
        </Box>

        <Grid container spacing={3} justifyContent="center" mb={8}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "10px",
                  border: "2px solid transparent",
                  borderImageSource: "linear-gradient(to left, #599ed4, #cc0000)",
                  borderImageSlice: 1,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  backgroundColor: "#E8F5FF",
                  height: "100%", // Ensures equal height for all cards
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                  {card.icon}
                  <Typography variant="h6" fontWeight="bold" fontSize="22px" color="#CC0000" mt={2}>
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold" fontSize="17px" color="#000">
                    {card.subtitle}
                  </Typography>
                  <Typography variant="body2" mt={1} color="text.secondary" textAlign="left">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer Circle */}
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#eef5fc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "48%",
            left: "77%",
            transform: "translateX(-50%)",
            width: "72px",
            height: "72px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
          }}
        />
      </Box>
    </div>
  );
};

export default GetToKnow;
