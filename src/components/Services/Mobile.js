import React from "react";
import { Box, Typography, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";
import { Language, ShoppingCart,  Code, Support, Cloud } from "@mui/icons-material"; 
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import background from "../../images/servicesimg/img4.png";

const servicesData = [
  { icon: <Language fontSize="large" color="black" />, title: "Strategy & Consultancy", description: "We work closely with our clients to understand their business goals and provide them with the best mobile app strategy that suits their needs."},
  { icon: <ShoppingCart fontSize="large" color="black" />, title: "Design & User Experience", description: "Our design team creates visually appealing & user-friendly interfaces for the mobile applications as per user requirements given by the client." },
  { icon: <SecurityRoundedIcon fontSize="large" color="black" />, title: "Development & Integration", description: "Our developers use the latest technology to build high-performance, scalable & secure mobile applications that integrate with existing systems." },
  { icon: <Code fontSize="large" color="black" />, title: "QA & Testing Services", description: "We ensure the quality of the final product by conducting thorough testing and quality assurance checks.We help you launch error-free products." },
  { icon: <Support fontSize="large" color="black" />, title: "Maintenance & Support", description: "Our team provides ongoing maintenance & support to ensure that your website remains up-to-date, secure, smooth & performing optimally." },
  { icon: <Cloud fontSize="large" color="black" />, title: "Service-Focus", description: "Our team has expertise in developing mobile applications for various platforms, including iOS & Android. We use agile methodologies to ensure delivery & seamless integration of  mobile app into our client's business process." },
];

const Mobile = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    
      <AppBar position="static" sx={{ background: "linear-gradient(to left, #CC0000, #FFFFFF, #FFFFFF, #599ED4)" }}>
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
           Mobile Application Development
          </Typography>
        </Toolbar>
      </AppBar>

     
      <Box
        sx={{
          flexGrow: 1, 
          width: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "50px", 
        }}
      >
        
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

export default Mobile;
