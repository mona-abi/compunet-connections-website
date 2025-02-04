import React from "react";
import { Box, Typography, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";
import { Language, ShoppingCart,  Code, Support,  } from "@mui/icons-material"; 
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import background from "../images/services/img4.png";

const servicesData = [
  { icon: <Language fontSize="large" color="black" />, title: "Functional", description: "It helps to verify that all the components work according to the requirements, providing seamless user experiences."},
  { icon: <ShoppingCart fontSize="large" color="black" />, title: "Test Automation", description: "Speeds up the testing process with the automated scripts & tools, allowing for continuous testing & faster release cycles." },
  { icon: <SecurityRoundedIcon fontSize="large" color="black" />, title: "Performance", description: "Assesses the software’s responsiveness, scalability & stability under different load conditions. It identifies bottlenecks, ensuring that your system performs optimally even during peak usage." },
  { icon: <Code fontSize="large" color="black" />, title: "Security", description: "Identifies vulnerabilities & security flaws in application, safeguarding against potential threats & breaches. This ensures data integrity & protects sensitive information." },
  { icon: <Support fontSize="large" color="black" />, title: "Mobility", description: "Focuses on functionality, performance & usability of mobile applications across a range of devices like iOS, Android & other mobile environments." },
  
];

const Mobile = () => {
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

export default Mobile;

