import { Box, Typography, Card, CardMedia } from '@mui/material';
import React from 'react';
import lead from '../../images/homeimg/lead.mp4';
import gradient from '../../images/homeimg/gradient.png';

const LeadingCompany = () => {
  return (
    <Box
      sx={{
    backgroundColor: '#E8F5FF',
    maxWidth: '100%',
    height: 950,
    overflowX: 'hidden',
    overflowY: 'hidden',   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: { xs: 2, md: 4 },
    boxSizing: 'border-box',
    fontFamily: 'Inter'
  }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection:  'row' ,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: 8,
          maxWidth: '100%',
          width: '100%',
          //flexWrap: 'wrap',
        }}
      >
<Box
  sx={{
    maxWidth: 620, // increased size
    aspectRatio: '535 / 368', // same ratio
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 2,
    boxSizing: 'border-box',
  }}
>
  {/* Top Gradient Line */}
  <Box sx={{ height: 5, width: 80, background: 'linear-gradient(90deg,#599ED4,#CC0000)' }} />

  {/* Title Section */}
  <Box>
    <Typography sx={{ fontSize: 46, fontWeight: 400 }}>
      Leading companies trust us
    </Typography>
    <Typography sx={{ fontSize: 46, fontWeight: 'bold' }}>
      to develop software
    </Typography>
  </Box>

  {/* Description */}
  <Typography sx={{ color: '#718096', marginTop: 0, fontSize: 21 }}>
    We <span style={{ color: '#CC0000' }}>add development capacity</span> to tech teams.
    Our value isn’t limited to building teams but is equally distributed across the project lifecycle.
    We are a custom software development company that guarantees the successful delivery of your project.
  </Typography>

  {/* Bottom Gradient Line */}
  <Box sx={{ height: 5, width: 80, background: 'linear-gradient(90deg,#599ED4,#CC0000)', marginTop: 2 }} />
</Box>



        <Card
  sx={{
    width: '100%',
    maxWidth: "40rem",
    borderRadius: 4,
    overflow: 'hidden', // ensures border radius is applied to video
  }}
>
  <video
    src={lead}
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: '100%',
      height: '75%',
      objectFit: 'cover',
      display: 'block',
      filter: 'blur(1.2px)'
    }}
  />
</Card>


</Box>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <img
          src={gradient}
          alt="gradient"
          style={{ display: 'block', width: '148%' }}
        />
        <Typography
          sx={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'normal',
            fontSize: 35,
            whiteSpace: 'nowrap',
          }}
        >
          Meet the People
        </Typography>
        <Typography
          sx={{
            position: 'absolute',
            top: '55%',
            left: '62%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 35,
            whiteSpace: 'nowrap',
          }}
        >
          We are Working With
        </Typography>
      </Box>
      <Box
  sx={{
    width: 100,
    height: 50,
    background: 'linear-gradient(90deg, #599ED4, #CC0000)',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: '950px',
    position: 'relative',   
    bottom:0,  
    left: '-300px',            
  }}
/>

    </Box>
  );
};

export default LeadingCompany;
