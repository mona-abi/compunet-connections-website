import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography
} from '@mui/material';
import cup from '../../images/homeimg/cup.png';

const Working = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#E8F5FF',
        paddingTop: 6,
        overflowX: 'hidden',
        fontFamily: 'Inter',
      }}
    >
      {/* Heading */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 4 }}>
        <Box sx={{
          mb: 2,
          height: 5,
          width: 80,
          background: 'linear-gradient(90deg,#599ED4,#CC0000)'
        }} />
        <Typography variant="h4" sx={{ mb: 1 }}>How development through</Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>Compunet Connections</Typography>
        <Typography variant="h4" fontWeight="bold">Works</Typography>
      </Box>

      {/* Row 1 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: 20,
          mb: 3,
          flexWrap: 'wrap',
          ml: '-100px'
        }}
      >
        {[
          {
            title: 'Assemble the right team',
            description: 'We handle all aspects of vetting & choosing the right team that you don\'t have the time, expertise or desire to do.'
          },
          {
            title: 'Sprint planning',
            description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items & ensure shared understanding.'
          },
          {
            title: 'Tech architecture',
            description: 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster & more independently.'
          }
        ].map((item, index) => (
          <Card key={index} sx={{ width: '20%', minWidth: 150, boxSizing: 'border-box' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      background: 'linear-gradient(90deg,#599ED4,#CC0000)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {index + 1}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                </Box>
                <Typography color="text.secondary">{item.description}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Red Line */}
      <Box sx={{ my: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: -1, ml: '-100px' }}>
          {[...Array(3)].map((_, i) => (
            <Typography key={i} sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              height: 3,
              backgroundColor: '#CC0000',
              width: '90%',
              margin: '0 auto',
              borderRadius: 1,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', mt: -1.5, ml: '100px' }}>
          {[...Array(3)].map((_, i) => (
            <Typography key={i} sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
          ))}
        </Box>
      </Box>

      {/* Row 2 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: 20,
          mb: 3,
          flexWrap: 'wrap',
          mr: '-100px'
        }}
      >
        {[
          {
            title: 'Standups & weekly demos',
            description: 'Standups, weekly demos & weekly reviews make sure everyone is on the same page and can raise their concerns.'
          },
          {
            title: 'Code reviews',
            description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.'
          },
          {
            title: 'Iterative delivery',
            description: 'We divide the implementation process into several checkpoints rather than a single deadline.'
          }
        ].map((item, index) => (
          <Card key={index + 3} sx={{ width: '20%', minWidth: 150, boxSizing: 'border-box' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      background: 'linear-gradient(90deg,#599ED4,#CC0000)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {index + 4}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                </Box>
                <Typography color="text.secondary">{item.description}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Working;
