import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
} from "@mui/material";
import {
  Language,
  ShoppingCart,
  Code,
  Support,
  Cloud,
} from "@mui/icons-material";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

const servicesData = [
  {
    icon: <Language fontSize="large" color="black" />,
    title: "Social Media Strategy Development",
    description:
      "We work with you to develop a social media strategy that aligns with your business goals & objectives.",
  },
  {
    icon: <ShoppingCart fontSize="large" color="black" />,
    title: "Content Creation",
    description:
      "Our team of creative writers, designers & videographers create visually appealing & engaging content that resonates with your target audience.",
  },
  {
    icon: <SecurityRoundedIcon fontSize="large" color="black" />,
    title: "Campaign Management",
    description:
      "We manage your social media accounts, execute campaigns & provide detailed performance reports to measure the success of our efforts.",
  },
  {
    icon: <Code fontSize="large" color="black" />,
    title: "Influencer Marketing",
    description:
      "We collaborate with key influencers in your industry to expand your reach & drive conversions.",
  },
  {
    icon: <Support fontSize="large" color="black" />,
    title: "Paid Advertising",
    description:
      "Our experts manage targeted paid social media advertising campaigns to reach your desired audience & drive results.",
  },
  {
    icon: <Cloud fontSize="large" color="black" />,
    title: "Social Media Monitoring Reputation Management",
    description:
      "We monitor your online reputation & respond to any negative comments or reviews in a timely & professional manner.",
  },
];

const Digital = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(to left, #CC0000, #FFFFFF, #FFFFFF, #599ED4)",
        }}
      >
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
            Digital Marketing
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

export default Digital;
