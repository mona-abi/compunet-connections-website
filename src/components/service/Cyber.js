import React from "react";
import { Box, Typography, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";
import { Language, ShoppingCart,  Code, Support, Cloud } from "@mui/icons-material"; 
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import background from "../images/services/img5.png";

const servicesData = [
  { icon: <Language fontSize="large" color="black" />, title: "Network Security", description: "We help secure & protect your network infrastructure by implementing firewalls, intrusion detection/prevention systems & virtual private networks (VPNs)."},
  { icon: <ShoppingCart fontSize="large" color="black" />, title: "Data Security", description: "We provide encryption, access control & backup & disaster recovery solutions to ensure your sensitive data that remains secure & protected." },
  { icon: <SecurityRoundedIcon fontSize="large" color="black" />, title: "Application Security", description: "Our team of experts assesses your applications & identifies vulnerabilities, providing remediation services to eliminate these risks." },
  { icon: <Code fontSize="large" color="black" />, title: "Cloud Security", description: "With companies moving their operations to the cloud, we offer comprehensive cloud security services to secure your cloud environment & ensure data privacy & integrity." },
  { icon: <Support fontSize="large" color="black" />, title: "Penatration Testing", description: "Our penetration testing services simulate real-world attacks to identify vulnerabilities & provide recommendations for further improvement." },
  { icon: <Cloud fontSize="large" color="black" />, title: "Threat Intelligence", description: "We monitor & analyze the latest of cyber threats & provide threat intelligence reports to keep you informed & ahead of potential risks." },
];

const Cyber = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    
      <AppBar position="static" sx={{ background: "linear-gradient(to left, #CC0000, #FFFFFF, #FFFFFF, #599ED4)", minHeight: "100px" }}>
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

export default Cyber;
