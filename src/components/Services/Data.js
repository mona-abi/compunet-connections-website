import React from "react";
import { Box, Typography, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";
import { Language, ShoppingCart, Code, Support, Cloud } from "@mui/icons-material"; 
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import background from "../../images/servicesimg/img6.png";  

const servicesData = [
  { icon: <Language fontSize="large" />, title: "Denodo Implementation", description: "Comprehensive implementation planning & execution integration with existing data systems of end-to-end project management."},
  { icon: <ShoppingCart fontSize="large" />, title: "Denodo Customization", description: "Tailored data virtualization solutions Custom connectors & adapters User-specific views and interfaces." },
  { icon: <SecurityRoundedIcon fontSize="large" />, title: "Denodo Integration", description: "Integration with diverse data sources Real-time data access & federation API development & management." },
  { icon: <Code fontSize="large" />, title: "Maintenance & Support", description: "24/7 technical support regular system updates & upgrades performance monitoring & optimization." },
  { icon: <Support fontSize="large" />, title: "Training & Consultancy", description: "In-depth user training programs. Strategic consultancy for data management. Best practices for maximizing Denodo’s capabilities." },
  { icon: <Cloud fontSize="large" />, title: "Approach", description: "We understand the unique challenges & requirements of various domains & designed to enhance operational efficiency, streamline processes & drive business growth." },
];

const Data = () => {
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
            Data & Denodo Services
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

export default Data;
