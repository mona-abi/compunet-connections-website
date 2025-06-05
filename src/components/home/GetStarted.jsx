import React from 'react';
import { Box, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import laptop from '../../images/homeimg/letstart.png';
import blue from '../../images/homeimg/blue.png';
import red from '../../images/homeimg/red.png';
import get from '../../images/homeimg/getstart1.jpeg';
const GetStarted = () => {
  const card = [
    { value: '20+', label: 'GLORIOUS YEARS' },
    { value: '160+', label: 'COMPLETED PROJECTS' },
    { value: '76+', label: 'HAPPY CLIENTS' },
  ];

  return (
    <Box
  sx={{
    maxWidth: '100%',
    position: 'relative',
    backgroundImage: `url(${laptop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 705,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    px: 2,
    pt: 6,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Inter',
  }}
>
  
  <Box sx={{ mt: '50px' ,minWidth:'1400px'}}>
    {/* Text content */}
    <Box>
      <Typography variant="h3" fontWeight="bold">
        Great <span style={{ color: '#FF6F61', fontWeight: '700px' }}>Product</span> is
      </Typography>
      <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
        built by great <span style={{ color: '#FF6F61' }}>Team</span>
      </Typography>
    </Box>

    <Typography sx={{ maxWidth: 600, mx: 'auto', mt: 3, fontSize: 18, fontWeight: '400', color: '#FFFFFF' }}>
      We help build and manage a team of world-class developers <br />to bring your vision to life
    </Typography>

    <Button
      variant="contained"
      sx={{
        backgroundColor: '#FF6A6A',
        fontSize: '16px',
        px: 4,
        py: 1.5,
        mt: 5,
        fontWeight: 600,
        borderRadius: 2,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#e85b5b',
        },
      }}
    >
      Let's get started!
    </Button>

    {/* Stat Cards */}
    <Grid container spacing={2} justifyContent="center" mt={6}>
      {card.map((item, i) => (
        <Grid item xs={10} sm={3} md={2} key={i}>
          <Card
            sx={{
              bgcolor: '#F2F9FF',
              color: 'black',
              textAlign: 'center',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography variant="h4" fontWeight="bold">
                {item.value}
              </Typography>
              <Typography variant="body2">{item.label}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>

  {/* Bottom strip */}
  <Box
    sx={{
      backgroundColor: '#E8F5FF',
      width: '100%',
      height: 55,
      position: 'absolute',
      bottom: 0,
      left: 0,
    }}
  ></Box>
</Box>
   

  );
};

export default GetStarted;
