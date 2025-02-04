// BlogPage.js

import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Avatar, Button, Container } from '@mui/material';
import background from '../../images/blogsimg/back.png'
import post from '../../images/blogsimg/post1.png'

const blogPosts = [
 {
      title: "Different Types Of Web Hosting : A Guide To Make The Best Decision",
      author: "Venky",
      date: "07 March 2023",
      image: "/project-management.jpg",
      authorImage: "/author.jpg",
    },
    

    
  {
    title: "IT Project Management Methodologies",
    author: "Venky",
    date: "13 February 2023",
    image: "/project-management.jpg", 
    authorImage: "/author.jpg"
  },
  {
    title: "How to Build Your Website from Scratch?",
    author: "Venky",
    date: "13 February 2023",
    image: "/build-website.jpg", // Replace with your image path
    authorImage: "/author.jpg"
  }
];

const Blogs = () => {
  return (
    
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={4} alignItems="center">
      {/* Left Section - Text */}
      <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" sx={{ color: 'red', fontWeight: 'bold' }}>
          TECH SERVICES
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 'bold', marginTop: 2, color: '#3A6EA5' }}>
          Explore our <br></br>blog for expert<br></br> analysis
        </Typography>

        <Typography variant="body1" sx={{ marginTop: 2, color: '#333' }}>
          Stay ahead of the curve with our latest insights,<br></br> trends, and solutions in the IT world.
        </Typography>
      </Grid>

      {/* Right Section - Image */}
      <Grid item xs={12} md={6}>
        <img
          src={background}  // Replace this with your image path
          alt="Blog"
          style={{ width: '100%', height: '100%' }}
        />
      </Grid>
    </Grid>
    <Box sx={{ backgroundColor: "#eef5fc", minHeight: "100vh" }}>
        {" "}  
<Container>
    <Box sx={{ backgroundColor: '#eaf6fb', minHeight: '100vh', padding: 4 }}>
      <Typography variant="h6" sx={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
        Our Blog
      </Typography>

      <Typography variant="h3" sx={{ color: '#0a1f44', textAlign: 'center', fontWeight: 'bold', marginBottom: 4 }}>
        Latest Post
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#d62828', fontWeight: 'bold' }}>
                  {post.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                  <Avatar src={post.authorImage} sx={{ width: 32, height: 32, marginRight: 1 }} />
                  <Typography variant="body2" sx={{ marginRight: 'auto', fontWeight: 'bold' }}>
                    {post.author}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>
                    {post.date}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    marginTop: 2,
                    backgroundColor: '#d62828',
                    color: '#fff',
                    width: '100%',
                    '&:hover': { backgroundColor: '#a61e1e' }
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
   
    </Container>
    </Box>
    </Box>
  );
};

export default Blogs;