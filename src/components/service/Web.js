import React from "react";
import { Box, Typography, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";
import { Language, ShoppingCart,  Code, Support, Cloud } from "@mui/icons-material"; 
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import background from "../images/services/img3.png";

const servicesData = [
  { icon: <Language fontSize="large" color="black" />, title: "Web Design & Development", description: "We create custom,user-friendly & responsive websites that accurately reflect your brand & meet your business requirements. We have expertise in WordPress & custom-built websites."},
  { icon: <ShoppingCart fontSize="large" color="black" />, title: "E-Commerce Solutions", description: "We provide complete E-Commerce solutions that allow you to manage your online store, process payments & fulfill orders efficiently. Our experience ranges from WooCommerce, Magento, Shopify, etc." },
  { icon: <SecurityRoundedIcon fontSize="large" color="black" />, title: "CMS Development", description: "We specialize in the development of content management systems that make it easy for you to manage & update your website. We can get this done using WordPress, Joomla & many other Open Source CMS." },
  { icon: <Code fontSize="large" color="black" />, title: "Custom Web Applications", description: "We build custom web applications that to automate business processes, to improve efficiency & streamline workflows. We have expertise in MEAN, MERN, Python, Ruby on Rail & other latest technology & tools." },
  { icon: <Support fontSize="large" color="black" />, title: "Maintenance & Support", description: "Our team provides ongoing maintenance & support to ensure that your website remains up-to-date, secure, smooth & performing optimally." },
  { icon: <Cloud fontSize="large" color="black" />, title: "Service-Focus", description: "We design to help enterprises achieve their goals & strong online presence. Expertise in quality, customer focus, flexibility &  support makes ideal choice for businesses in the US, UK, Australia & the Middle East." },
];

const Web = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* AppBar for "Web & Cloud Application Development" */}
      <AppBar position="static" sx={{ background: "linear-gradient(to left, #CC0000, #FFFFFF,#FFFFFF, #599ED4)", minHeight: "100px" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #CC0000, #599ED4)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontFamily: "Inter",
            }}
          >
            Web & Cloud Application Development
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content Section */}
      <Box
        sx={{
          flexGrow: 1, // Ensures this section fills the available space
          width: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "50px", // Add padding to prevent clash with footer
        }}
      >
        {/* Services Grid */}
        <Grid container spacing={3} sx={{ width: "90%", maxWidth: "1200px", margin: "auto" }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                boxShadow: 3, 
                borderRadius: 2, 
                minHeight: "280px", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                textAlign: "center", 
                p: 3,
                mt:3,
              }}>
                
                
                <Box 
                  sx={{
                    width: "60px", 
                    height: "60px", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%", 
                    border: "6px solid transparent", 
                    backgroundImage: "linear-gradient(to right, #CC0000, #599ED4)", 
                    backgroundOrigin: "border-box", 
                    padding: "4px", 
                  }}
                >
                  {service.icon}
                </Box>

                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", mt: 1, color: "#666" }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          ))}
        </Grid>
      </Box>

      
    </Box>
  );
};

export default Web;
