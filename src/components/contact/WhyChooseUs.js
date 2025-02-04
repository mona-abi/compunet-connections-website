import React from "react";
import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import chat from '../../images/contactImg/LogoWhite .png';
import img1 from '../../images/contactImg/image.svg'
import img2 from '../../images/contactImg/image 13.svg'
import img3 from '../../images/contactImg/image 14.svg'
import img from '../../images/contactImg/Ellipse.png'

const WhyChooseUs = () => {
  const cards = [
    {
      icon: (
        <img
          src={img1}
          alt="Technology Icon"
        />
      ),
      title: "Technology",
      subtitle: "Right-Sized",
      description:
        "Educating & Empowering our clients with appropriate technology solutions has been our eternal goal. We ensure that the solution is appropriate for you & your needs."
    },
    {
      icon: (
        <img
          src={img2}
          alt="Investment Icon"
        />
      ),
      title: "Investment",
      subtitle: "Right-Priced",
      description: "Being business owners, we understand that every cent of your investment is valuable. Our solutions would be most feasible & perfect for you without any compromises."
    },
    {
      icon: (
        <img
          src={img3}
          alt="Business Icon"
        />
      ),
      title: "Business",
      subtitle: "Right-Fit",
      description: "We strive to ensure that your business technology solution fits right in your business plan & objectives. We go to an extent of postponing technology until your business processes are set!"
    }
  ];

  return (
    <div>
      <Box sx={{ backgroundColor: "#FFFFFF", py: 8, px: 4, position: "relative" }}>
        {/* Background Circles */}
        <Box
          sx={{
            position: 'absolute',
            top: '66px',
            right: '100px',
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
          WHY <span style={{ color: "#cc0000" }}>CH</span><span style={{ color: "#599ed4" }}>OOSE US</span>
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
            }}
          >
            <img src={chat} alt="Chat" style={{ width: 24, height: 24 }} />
            Talk to Us
          </Button>
        </Box>

        <Grid container spacing={3} justifyContent="center">
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
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  {card.icon}
                  <Typography variant="h6" fontWeight="bold" fontSize='22px' color="#CC0000" mt={2}>
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold" fontSize='17px' color="#000">
                    {card.subtitle}
                  </Typography>
                  <Typography variant="body2" mt={1} color="text.secondary" textAlign='justify'>
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

export default WhyChooseUs;
