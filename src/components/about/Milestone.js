import { Box, Typography } from '@mui/material';
import React from 'react';
import gradient from '../../images/homeimg/gradient.png';
import milestone from '../../images/homeimg/milestone.png';
import bg from '../../images/homeimg/bg.png';

const Milestones = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#E8F5FF',
        maxWidth  : '100%',
        height: '800px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily:'Inter'
      }}
    >
      {/* Gradient Title */}
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <img src={gradient} alt="gradient" style={{ display: 'block', width: 400 }} />
        <Typography
          sx={{
            position: 'absolute',
            top: '50%',
            left: '45%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 35,
          }}
        >
          Milestones
        </Typography>
      </Box>

      {/* Milestone image on right */}
      <Box
        sx={{
          position: 'absolute',
          top: '100px',
          right: 0,
          width: '1440px',
          height: '605px',
          backgroundImage: `url(${milestone})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          zIndex: 1,
        }}
      />

      {/* BG image with stats on left */}
     <Box
  sx={{
    position: 'absolute',
    top: '100px',
    left: 0,
    width: '782px',
    height: '607px',
    zIndex: 2,
  }}
>
  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
    <img src={bg} alt="bg" style={{ display: 'block', width: '100%' }} />
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '80%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        justifyItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {[
        { count: '20+', label: 'Glorious <br /> Years' },
        { count: '76+', label: 'Happy <br /> Clients' },
        { count: '160+', label: 'Projects <br /> Completed' },
        { count: '10+', label: 'Countries <br /> Reached' },
        { count: '32+', label: 'Team <br /> Advisor' },
        { count: '10+', label: 'Services <br /> Offered' },
      ].map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: 60,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #599ED4, #CC0000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {item.count}
          </Typography>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: '-10px',
            }}
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
        </Box>
      ))}
    </Box>
  </Box>
</Box>

    </Box>

  );
};

export default Milestones;
