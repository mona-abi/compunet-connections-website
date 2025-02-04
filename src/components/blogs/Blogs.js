import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import background from "../../images/blogsimg/back.png";
import post1 from "../../images/blogsimg/post1.png";
import post2 from "../../images/blogsimg/post2.png";
import post3 from "../../images/blogsimg/post3.png";
import post4 from "../../images/blogsimg/post4.png";
import post5 from "../../images/blogsimg/post5.png";
import authorImg from "../../images/blogsimg/author.png";
import chat from "../../images/contactImg/LogoWhite .png";

const blogPosts = [
  {
    title: "Different Types Of Web Hosting ",
    author: "Venky",
    date: "07 March 2023",
    image: post1,
    authorImage: authorImg,
    id: 1,
  },
  {
    title: "IT Project Management Methodologies",
    author: "Venky",
    date: "13 February 2023",
    image: post2,
    authorImage: authorImg,
    id: 2,
  },
  {
    title: "How to Build Your Website from Scratch?",
    author: "Venky",
    date: "13 February 2023",
    image: post3,
    authorImage: authorImg,
    id: 3,
  },
  {
    title: "Digital Transformation – 101",
    author: "Venky",
    date: "13 February 2023",
    image: post4,
    authorImage: authorImg,
    id: 4,
  },
  {
    title: "How to Start SEO 2020 for New Website ",
    author: "Venky",
    date: "13 February 2023",
    image: post5,
    authorImage: authorImg,
    id: 5,
  },
  {
    title: "WebP",
    author: "Venky",
    date: "13 February 2023",
    image: post3,
    authorImage: authorImg,
    id: 6,
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 4 }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left",paddingLeft:'60px' }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#CC0000", fontWeight: "bold" }}
            >
              TECH SERVICES
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginTop: 2, color: "#599ED4" }}
            >
              Explore our <br /> blog for expert <br /> analysis
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2, color: "#333" }}>
              Stay ahead of the curve with our latest insights, <br /> trends,
              and solutions in the IT world.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={background}
            alt="Blog"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>

      {/* Blog Section */}
      <Box sx={{ backgroundColor: "#eef5fc", minHeight: "100vh", paddingY: 4 }}>
        <Container>
          <Box sx={{ backgroundColor: "#eaf6fb", padding: 4 }}>
            <Typography
              variant="h6"
              sx={{ color: "#FF3E54", textAlign: "center", fontWeight: "bold", fontSize:'20px'}}
            >
              Our Blog
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#0a1f44",
                textAlign: "center",
                fontWeight: "bold",
                fontSize:'25px',
                marginBottom: 4,
              }}
            >
              Latest Posts
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {blogPosts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card
                    sx={{
                      boxShadow: 3,
                      borderRadius: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#FF3E54",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: 2,
                        }}
                      >
                        <Avatar
                          src={post.authorImage}
                          sx={{ width: 32, height: 32, marginRight: 1 }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ marginRight: "auto", fontWeight: "bold" }}
                        >
                          {post.author}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "gray" }}>
                          {post.date}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          marginTop: 2,
                          backgroundColor: "#d62828",
                          color: "#fff",
                          width: "100%",
                          "&:hover": { backgroundColor: "#a61e1e" },
                        }}
                        onClick={() => {
                          console.log(`Navigating to /blog/${post.id}`); // Debug line
                          navigate(`/blog/${post.id}`);
                        }}
                      >
                        Read More &gt;&gt;&gt;
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
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
    </Box>
  );
};

export default Blogs;
