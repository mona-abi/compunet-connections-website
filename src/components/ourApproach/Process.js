import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import background from "../../images/ourApproach/g.png";

const steps = [
  {
    title: "#1 Assemble the right team",
    description:
      "We handle all aspects of vetting & choosing the right team that you don't have the time, expertise or desire to do.",
  },
  {
    title: "#3 Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    title: "#5 Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    title: "#2 Define",
    description:
      "Unpack & synthesize your empathy findings into compelling needs & insights & scope a specific & meaningful challenge.",
  },
 
  {
    title: "#4 Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  
  {
    title: "#6 Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

function Process() {
  return (
    <Box sx={{ bgcolor: "#E8F5FF", minHeight: "100vh", p: 5 }}>
      <Container>
           
                 <Box
                   sx={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     
                   }}
                 >
                   <Box
                     sx={{
                       width: "40px",
                       height: "3px",
                       background: "linear-gradient(to right, #599ed4, #cc0000)",
                     }}
                   />
                 </Box>
       
        <Typography variant="h4" align="center" gutterBottom>
          The process of development <br />
          through&nbsp;
          <span
            style={{
              background: "linear-gradient(to right, #CC0000, #599ED4)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
          >
            Compunet Connections
          </span>
        </Typography>

        {/* First Three Boxes */}
        <Grid container justifyContent="center" spacing={4} sx={{ mb: 5 ,paddingRight:'20px' }} >
          {steps.slice(0, 3).map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  minHeight: 130,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom  fontWeight='bold'>
                    <span
                      style={{
                        fontWeight:'bold',
                        background: "linear-gradient(to right, #CC0000, #599ED4)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                
                      }}
                    >
                      {step.title.slice(0, 2)}
                    </span>
                    {step.title.slice(2)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary"  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Full-Width Background Image */}
      <Box
        sx={{
          height: "10vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 5,
        }}
      />

      <Container>
        {/* Remaining Three Boxes */}
        <Grid container justifyContent="center" spacing={4}>
          {steps.slice(3).map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ paddingLeft:'65px',}}>
              <Card
                sx={{
                 
                  minHeight: 150,
                  fontWeight:'bold',
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom  fontWeight='bold'>
                    <span
                      style={{
                        background: "linear-gradient(to right, #CC0000, #599ED4)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        fontWeight:'bold',
                      }}
                    >
                      {step.title.slice(0, 2)}
                    </span>
                    {step.title.slice(2)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary"  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Process;
