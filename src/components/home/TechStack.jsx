import { Box, Typography } from '@mui/material';
import React from 'react';
import techbg from '../../images/homeimg/techbg.png';
import node from '../../images/homeimg/node.png';
import php from '../../images/homeimg/php.png';
import mysql from '../../images/homeimg/mysql.png';
import java from '../../images/homeimg/java.png';
import react from '../../images/homeimg/react.png';
import python from '../../images/homeimg/python.png';
import rails from '../../images/homeimg/ruby.png';
import mongo from '../../images/homeimg/mongo.png';

const TechStack = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        height: '100vh',
        backgroundImage: `url(${techbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        position: 'relative',
        zIndex: 1,
        color: '#000',
         fontFamily:'Inter'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ mb: 2, height: 5, width: 80, background: 'linear-gradient(90deg,#599ED4,#CC0000)' }} />
        <Typography variant="h4" sx={{ mb: 2 }}>Our</Typography>
        <Typography variant="h4" fontWeight="bold">Teck Stack</Typography>
      </Box>

      {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' ,flexWrap:'wrap'}}>
        <Box><Typography variant='h5' sx={{ fontWeight: 'bold' }}>Backend</Typography></Box>
        <Box><Typography variant='h5' sx={{ fontWeight: 'bold' }}>Frontend</Typography></Box>
        <Box><Typography variant='h5' sx={{ fontWeight: 'bold' }}>Databases</Typography></Box>
        <Box><Typography variant='h5' sx={{ fontWeight: 'bold' }}>CMS</Typography></Box>
        <Box><Typography variant='h5' sx={{ fontWeight: 'bold' }}>CloudTesting</Typography></Box>
        <Box><Typography variant='h5' sx={{ fontWeight: 'bold' }}>DevOps</Typography></Box>
      </Box> */}

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',flexWrap:'wrap' }}>
        <Box><img src={node} alt="node" /></Box>
        <Box><img src={php} alt="php" /></Box>
        <Box><img src={mysql} alt="mysql" /></Box>
        <Box><img src={java} alt="java" /></Box>
        <Box><img src={react} alt="react" width='100px' /></Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Box><img src={python} alt="python" /></Box>
        <Box><img src={rails} alt="ruby on rails" /></Box>
        <Box><img src={mongo} alt="mongodb" /></Box>
      </Box>
    </Box>
  );
};

export default TechStack;
