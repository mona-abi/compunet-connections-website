import React from "react";
import { Box, Typography, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";
import { Language, ShoppingCart, Code, Support, Cloud } from "@mui/icons-material";
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';

const servicesData = [
  { icon: <Language fontSize="large" color="black" />, title: "Strategy & Consultancy", description: "We work closely with our clients to understand their business goals and provide them with the best mobile app strategy that suits their needs." },
  { icon: <ShoppingCart fontSize="large" color="black" />, title: "Design & User Experience", description: "Our design team creates visually appealing & user-friendly interfaces for the mobile applications as per user requirements given by the client." },
  { icon: <SecurityRoundedIcon fontSize="large" color="black" />, title: "Development & Integration", description: "Our developers use the latest technology to build high-performance, scalable & secure mobile applications that integrate with existing systems." },
  { icon: <Code fontSize="large" color="black" />, title: "QA & Testing Services", description: "We ensure the quality of the final product by conducting thorough testing and quality assurance checks. We help you launch error-free products." },
  { icon: <Support fontSize="large" color="black" />, title: "App Assistance", description: "Our team provides ongoing maintenance and dedicated support.We ensure your website stays updated, secure, and bug-free.Performance, smooth user experience, and reliability are our priorities" },
  { icon: <Cloud fontSize="large" color="black" />, title: "Service-Driven Approach", description: "We craft mobile applications for both iOS and Android platforms with proven expertise.Using agile methodology, we ensure fast delivery and flawless alignment with your business workflow." },
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
    width: '100%',
    maxWidth: 365,
    minHeight: 265,
    backgroundColor: 'white',
    borderRadius: 2,
    boxShadow: 3,
    fontFamily: 'Inter',
    margin: 'auto',
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

export default Mobile;
