import React from "react";
import { Box, Typography, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";
import { Language, ShoppingCart, Code, Support, Cloud } from "@mui/icons-material"; 
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import background from "../../images/servicesimg/img3.png";

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
      <AppBar position="static" sx={{ background: "linear-gradient(to left, #CC0000, #FFFFFF,#FFFFFF, #599ED4)" }}>
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

      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          backgroundColor: "#E6EDF4",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <Grid container spacing={5} sx={{ width: "80%", maxWidth: "1400px", margin: "auto" }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: 365,
                  height: 265,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  boxShadow: 3,
                  fontFamily: 'Inter',
                 ml:-1,
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 2,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'linear-gradient(90deg,#599ED4,#CC0000)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 65,
                          height: 65,
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {service.icon}
                      </Box>
                    </Box>

                    <Typography variant="h6" sx={{ color: '#2D3748', fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ color: '#718096', mt: 1 }}>
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
