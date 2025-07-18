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
import background from "../../images/servicesimg/img3.png";

const servicesData = [
  {
    icon: <Language fontSize="large" color="black" />,
    title: "Functional",
    description:
      "It helps to verify that all the components work according to the requirements, providing seamless user experiences.",
  },
  {
    icon: <ShoppingCart fontSize="large" color="black" />,
    title: "Test Automation",
    description:
      "Speeds up the testing process with the automated scripts & tools, allowing for continuous testing & faster release cycles. ",
  },
  {
    icon: <SecurityRoundedIcon fontSize="large" color="black" />,
    title: "Performance",
    description:
      "Assesses the software’s responsiveness, scalability & stability under different load conditions. It identifies bottlenecks, ensuring that your system performs optimally even during peak usage.",
  },
  {
    icon: <Code fontSize="large" color="black" />,
    title: "Security",
    description:
      "Identifies vulnerabilities & security flaws in application, safeguarding against potential threats & breaches. This ensures data integrity & protects sensitive information.",
  },
  {
    icon: <Support fontSize="large" color="black" />,
    title: "Mobility",
    description:
      "Focuses on functionality, performance & usability of mobile applications across a range of devices like iOS, Android & other mobile environments.",
  },
    { icon: <Support fontSize="large" color="black" />, title: "Maintenance & Support", description: "Our team provides ongoing maintenance & support to ensure that your website remains up-to-date, secure, smooth & performing optimally." },
  
];

const Web = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(to left, #CC0000, #FFFFFF,#FFFFFF, #599ED4)",
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
            QA & Testing Sevices
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
  <Grid
    item
    xs={12}
    sm={6}
    md={4}
    key={index}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      ...(index >= 3 && servicesData.length < 6
        ? { md: { mx: 'auto' } }
        : {}),
    }}
  >
    <Card
      sx={{
        width: 365,
        height: 265,
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        fontFamily: 'Inter',
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
