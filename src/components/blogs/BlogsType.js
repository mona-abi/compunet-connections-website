import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
  Stack,
} from "@mui/material";
import image1 from "../../images/blogsimg/image1.png";
import banner from "../../images/blogsimg/banner.png";
import chat from "../../images/contactImg/LogoWhite .png";
import image2 from "../../images/blogsimg/image2.png";
import image3 from "../../images/blogsimg/image3.png";
import image4 from "../../images/blogsimg/image4.png";
import { AccessTime, Message } from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormPage from "./FormPage";
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
              <img
                src={image2}
                alt="Web Hosting"
                style={{ width: "100%", borderRadius: '10px' ,height:'270px'}}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph sx={{lineHeight:'2.1', textAlign: 'justify'}}>
              When it comes to purchasing web hosting, there are a lot of options available to you. However, not all of them are equal. It’s important to choose a web host that specializes in the type of hosting that you need, rather than limiting yourself to one company. By doing this, you’ll be able to find a host that is perfect for your website & budget.<br></br>
              One option that is great for new websites is shared hosting. With shared hosting, all users share the same IP address so if one user sends out spam emails, everyone will be affected as Google associates them with the same address. However, shared hosting can become expensive if you expect more than 20 - 30 visitors per day or if you want to scale up your website in the future.
              </Typography>
              
            </Grid>
            <Typography sx={{lineHeight:'2.1', textAlign: 'justify',paddingLeft:'32px'}}>If you’re looking for something more stable but don’t have a huge budget, SiteGround is a good option. SiteGround offers an affordable starting plan at $1 per month which gives you plenty of room to grow without breaking the bank. If you’re looking for something even better but don’t want to spend too much money, HostGator is another great option they offer plans starting at $3 /month!</Typography>

           
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
          Understanding The Differences Between VPS, Cloud & Scala Hosting
          </Typography>
        </Box>

        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph sx={{lineHeight:'2.1', textAlign: 'justify'}}>
              When choosing a hosting solution, it’s important to understand the differences between VPS, Cloud & Scala Hosting. Each type of hosting has its own advantages & disadvantages, so it’s important to find the right solution for your website. VPS hosting provides more control over your website while still sharing resources with other people. Similar to renting a room in a building compared to an entire house, you still have access to all of the resources that the VPS  includes CPU & RAM usage as well as bandwidth. However, you have more control over how your VPS is set up & managed; unmanaged VPS are just given the space without any assistance managed services provide help during setup & ongoing support while unmanaged is just given the space without any assistance.
              </Typography>
            </Grid>
  
            <Grid item xs={12} md={4}>
              <img
                src={image3}
                alt="Web Hosting"
                style={{ width: "100%", borderRadius: '10px' ,height:'270px'}}
              />
            </Grid>
            <Typography sx={{lineHeight:'2.1', textAlign: 'justify',paddingLeft:'25px'}}>Cloud Hosting is similar to VPS but utilizes multiple servers for resource pooling so if one server fails, another automatically takes its place this makes it much more reliable than relying on just one server. Additionally, Cloud Hosting offers flexibility in terms of pricing you can pay according to how much traffic your site is handling or you can pay for a longer term subscription that will provide consistent coverage regardless of traffic fluctuations. <br></br>
            Finally, Scala Hosting is generally recommended for those looking for both managed VPS & Cloud Hosting due to their competitive pricing & top tier product quality. Not only are they both reliable solutions, but they also offer features such as live chat support & 24/7 customer support (among other things). So whichever type of hosting solution you choose, make sure that you’re getting top-notch quality products from a reputable provider!</Typography>
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
          Compunet Connections: Professional Web Hosting & Maintenance Services
          </Typography>
        </Box>

        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
              <img
                src={image4}
                alt="Web Hosting"
                style={{ width: "100%", borderRadius: '10px' ,height:'260px'}}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph sx={{lineHeight:'2.1', textAlign: 'justify'}}>
              Looking to host a website but don’t know where to start? Look no further than Compunet Connections Web Hosting & Maintenance Services. Compunet Connections has years of experience in the web hosting industry & his knowledge will help you create a website that is both functional & user-friendly. With features like SEO optimization, interactive content, mobile support, ecommerce capabilities or any other desired feature, you can be sure that your site will be up to date & attractive.<br></br>
In addition to providing hosting services for your website, Compunet Connections also provides professional advice on choosing the best technology & server solutions for your unique needs. He is familiar with all sorts of web server technologies including domain name registration & setting up SSL 
              </Typography>
            </Grid>
            <Typography sx={{lineHeight:'2.1', textAlign: 'justify',paddingLeft:'32px'}}>certificates. Furthermore, he can help to automate tasks using scripting language like PHP or JavaScript making your life as a web developer much easier!
            Compunet Connections is available 24/7 to provide customer service & support when needed by phone or email. So if you’re looking for a reliable resource for hosting your website look no further than Compunet Connections Professional Web Hosting & Maintenance Services!</Typography>

           
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
  <Typography fontSize="20px" color="#FFFFFF" align="left" fontWeight="bold">
    Summary
  </Typography>
</Box>
<Typography
  variant="body1"
  paragraph
  sx={{ lineHeight: "2.1", textAlign: "justify" }}
>
  In conclusion, having the right web hosting service is essential for
  success. There are a variety of options available such as VPS, cloud &
  scala hosting, each offering different advantages & disadvantages. It is
  important to choose the right solution for your website & budget.
  Additionally, Compunet Connections Professional Web Hosting & Maintenance
  Services provides reliable web hosting services with quality customer
  support 24/7. To make sure that your website reaches its potential & you
  have a reliable host with quality customer support, look no further than
  Compunet Connections Professional Web Hosting & Maintenance Services! Take
  action now by contacting Compunet Connections for more information about
  our services!
</Typography>

<Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop: 2 }}>
  <Box display="flex" alignItems="center">
    <CalendarMonthIcon fontSize="small" sx={{ marginRight: 0.5 }} />
    <Typography variant="body2" color="#CC0000">Posted on 07 Mar 2023</Typography>
  </Box>
  <Box display="flex" alignItems="center">
    <AccessTime fontSize="small" sx={{ marginRight: 0.5 }} />
    <Typography variant="body2" color="#CC0000">06:37 a.m.</Typography>
  </Box>
  <Box display="flex" alignItems="center">
    <Message fontSize="small" sx={{ marginRight: 0.5 }} />
    <Typography variant="body2"color="#CC0000">No comments</Typography>
  </Box>
</Stack>
<hr></hr>
 <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#eef5fc",
          position: "relative",
          overflow: "hidden",
        }}
      ></Box>
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
      <div>
        <FormPage/>
      </div>
    </Box>
  );
};

export default BlogsType;
