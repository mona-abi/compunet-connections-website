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
    title: "Network Security",
    description:
      "We help secure & protect your network infrastructure by implementing firewalls, intrusion detection/prevention systems & virtual private networks (VPNs).",
  },
  {
    icon: <ShoppingCart fontSize="large" color="black" />,
    title: "Data Security",
    description:
      "We provide encryption, access control & backup & disaster recovery solutions to ensure your sensitive data that remains secure & protected.",
  },
  {
    icon: <SecurityRoundedIcon fontSize="large" color="black" />,
    title: "Application Security",
    description:
      "Our team of experts assesses your applications & identifies vulnerabilities, providing remediation services to eliminate these risks.",
  },
  {
    icon: <Code fontSize="large" color="black" />,
    title: "Cloud Security",
    description:
      "With companies moving their operations to the cloud, we offer comprehensive cloud security services to secure your cloud environment & ensure data privacy & integrity.",
  },
  {
    icon: <Support fontSize="large" color="black" />,
    title: "Penetration Testing",
    description:
      "Our penetration testing services simulate real-world attacks to identify vulnerabilities & provide recommendations for further improvement.",
  },
  {
    icon: <Cloud fontSize="large" color="black" />,
    title: "Threat Intelligence",
    description:
      "We monitor & analyze the latest of cyber threats & provide threat intelligence reports to keep you informed & ahead of potential risks.",
  },
];

const Cyber = () => {
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
            Cyber Security & Services
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

export default Cyber;
