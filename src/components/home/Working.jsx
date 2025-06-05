import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import cup from '../../images/homeimg/cup.png'

const Working = () => {
  return (
    <Box sx={{ maxWidth: '100%', minHeight: '100vh', backgroundColor: '#E8F5FF', paddingTop: 6, overflowX: 'hidden',fontFamily:'Inter' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 4 }}>
        <Box sx={{ mb: 2, height: 5, width: 80, background: 'linear-gradient(90deg,#599ED4,#CC0000)' }} />
        <Typography variant="h4" sx={{ mb: 1 }}>How development through</Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>Compunet Connections</Typography>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Works</Typography>
      </Box>

      {/* Row 1 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: 20, mb: 3, flexWrap: 'wrap',ml:'-100px' }}>
        <Card sx={{ width: '20%', minWidth: 150, boxSizing: 'border-box' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{background: 'linear-gradient(90deg,#599ED4,#CC0000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}}>1</Typography>
                <Typography variant="h6" fontWeight="bold">Assemble the right team</Typography>
              </Box>
              <Typography color="text.secondary">We handle all aspects of vetting & choosing the right team that you don't have the time, expertise or desire to do.</Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: '20%', minWidth: 150, boxSizing: 'border-box' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{background: 'linear-gradient(90deg,#599ED4,#CC0000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}}>2</Typography>
                <Typography variant="h6" fontWeight="bold">Sprint planning</Typography>
              </Box>
              <Typography color="text.secondary">Sprint roadmap is a collective planning effort. Team members collaborate to clarify items & ensure shared understanding.</Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: '20%', minWidth: 150, boxSizing: 'border-box' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{background: 'linear-gradient(90deg,#599ED4,#CC0000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}}>3</Typography>
                <Typography variant="h6" fontWeight="bold">Tech architecture</Typography>
              </Box>
              <Typography color="text.secondary">We break monolithic apps into microservices. Decoupling the code allows teams to move faster & more independently.</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Red Line */}
      <Box sx={{ my: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: -1,ml:'-100px' }}>
          <Typography sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
          <Typography sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
          <Typography sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
        </Box>
        <Box sx={
          {
            display:'flex'
          }
        }><Box
          sx={{
            height: 3,
            backgroundColor: '#CC0000',
            width: '90%',
            margin: '0 auto',
            borderRadius: 1,
          }}
        />
        {/* <img src={cup} alt="cup"  style={{}}/> */}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: "flex-end", mt: -1.5,ml:'100px' }}>
          <Typography sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
          <Typography sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
          <Typography sx={{ color: '#CC0000', fontWeight: 'bold', fontSize: '25px' }}>|</Typography>
        </Box>
      </Box>

      {/* Row 2 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: 20, mb: 3, flexWrap: 'wrap',ml:'100px' }}>
        <Card sx={{ width: '30%', maxWidth: 325, boxSizing: 'border-box' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{background: 'linear-gradient(90deg,#599ED4,#CC0000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}}>4</Typography>
                <Typography variant="h6" fontWeight="bold">Standups & weekly demos</Typography>
              </Box>
              <Typography color="text.secondary">Standups, weekly demos & weekly reviews make sure everyone is on the same page and can raise their concerns.</Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{  width: '30%', maxWidth: 325, boxSizing: 'border-box' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{background: 'linear-gradient(90deg,#599ED4,#CC0000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}}>5</Typography>
                <Typography variant="h6" fontWeight="bold">Code reviews</Typography>
              </Box>
              <Typography color="text.secondary">Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{  width: '30%', maxWidth: 325,boxSizing: 'border-box' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{background: 'linear-gradient(90deg,#599ED4,#CC0000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}}>6</Typography>
                <Typography variant="h6" fontWeight="bold">Iterative delivery</Typography>
              </Box>
              <Typography color="text.secondary">We divide the implementation process into several checkpoints rather than a single deadline.</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Working;
