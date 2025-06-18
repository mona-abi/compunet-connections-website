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
import background from "../../images/servicesimg/img9.png";

const servicesData = [
  {
    icon: <Language fontSize="large" color="black" />,
    title: "Priority for your needs",
    description:
      "We aim to gain a understanding of your immediate & long-term staffing needs. This enables us to provide tailored solutions that align perfectly with your goals.",
  },
  {
    icon: <ShoppingCart fontSize="large" color="black" />,
    title: "Our Talent Pool",
    description:
      "We maintain a database of highly qualified candidates with diverse skill sets, ensuring that we can provide you with the right talent for your projects.",
  },
  {
    icon: <SecurityRoundedIcon fontSize="large" color="black" />,
    title: "Quality Assurance",
    description:
      "Our rigorous screening & vetting processes ensure that only the most qualified & competent candidates are presented to you for consideration.",
  },
  {
    icon: <Code fontSize="large" color="black" />,
    title: "Cost Effective Solutions",
    description:
      "Our competitive pricing models are designed to maximize the value you receive from our services & offering cost-effective staffing solutions without compromising on quality.",
  },
  {
    icon: <Support fontSize="large" color="black" />,
    title: "Staffing",
    description:
      "To suit your needs, we bring to you tailored staffing solutions to meet your organization’s unique needs with the help of staffing.",
  },
    { icon: <Cloud fontSize="large" color="black" />, title: "Service-Focus", description: "We design to help enterprises achieve their goals & strong online presence. Expertise in quality, customer focus, flexibility &  support makes ideal choice for businesses in the US, UK, Australia & the Middle East." },
  
  
];

const Staffing = () => {
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
            IT Staffing
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

export default Staffing;
