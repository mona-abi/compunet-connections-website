import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import image1 from "../../images/blogsimg/image1.png";
import banner from "../../images/blogsimg/banner.png";
import chat from "../../images/contactImg/LogoWhite .png";

const BlogsType = () => {
  return (
    <Box sx={{ backgroundColor: "#eef5fc", minHeight: "100vh" }}>
      {" "}
   
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        //   padding: 2,
          textAlign: "center",
          paddingTop:'35px',
          height: '130px',
          width: "100%", // Make it responsive
        }}
      >
        <Typography variant="h4" color="white" gutterBottom fontSize="28px">
          <br />
          Different Types Of Web Hosting: A Guide To Making The Best Decision
        </Typography>
        <Typography variant="subtitle1" color="#FFD43B">
          Blog
        </Typography>
      </Box>
      <Container>
        {/* Content Section */}
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph sx={{lineHeight:'2.1', textAlign: 'justify'}}>
                The internet is an increasingly important part of our lives &
                having the right hosting service is essential for success.
                Without the right web hosting, your website can fail to reach
                its potential & become bogged down with slow speeds or
                unreliable uptime. In this blog post, we will discuss the
                different types of web hosting, so you can make the best
                decision for your business. We will discuss the differences
                between VPS, cloud & scala hosting, as well as tips for finding
                the right web hosting company. We will also discuss Compunet
                Connections professional web hosting & maintenance services. By
                the end of this post, you will have a better understanding of
                the different types of web hosting & you will be able to make
                the best decision for your business.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <img
                src={image1}
                alt="Web Hosting"
                style={{ width: "100%", borderRadius: '10px' ,height:'250px'}}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Tips Section */}
        <Box
          sx={{
            marginTop: 4,
            background: "linear-gradient(to left, #599ED4, #CC0000)",
            padding: 2,
           
          }}
        >
          <Typography fontSize='20px' color="#FFFFFF" align="left" fontWeight="bold" >
            Tips for finding the right web hosting company
          </Typography>
        </Box>

        {/* How to Choose Section */}
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#00bcd4", color: "white" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    HOW TO CHOOSE BEST WEB HOST
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph>
                When it comes to purchasing web hosting, there are a lot of
                options available to you. However, not all of them are equal.
                It's important to choose a web host that specializes in the type
                of hosting that you need, rather than limiting yourself to one
                company. By doing this, you'll be able to find a host that is
                perfect for your website & budget.
              </Typography>

              <Typography variant="body1" paragraph>
                One option that is great for new websites is shared hosting.
                With shared hosting, all users share the same IP address so if
                one user sends out spam...
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Button */}
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              padding: "10px 20px",
              color: "#000",
              fontWeight: "bold",
              border: "2px solid #599ed4",
              borderRadius: "15px 0 15px 0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img src={chat} alt="Chat" style={{ width: 24, height: 24 }} />
            Talk to Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogsType;
