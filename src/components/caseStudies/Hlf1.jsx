import React from 'react';
import { Box, Typography } from '@mui/material';
import hlf from "../../images/homeimg/hlf2.png";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';


const Retrax = () => {
  const navigate =useNavigate();

  return (
    <Box sx={{ width: '100%', height: "90vh", display: "flex" }}>
      <KeyboardBackspaceIcon  
       onClick={() => navigate(-1)}
      sx={{mt:10,ml:3}}/>
      {/* Main content area */}
      <Box sx={{ width: '80%', display: 'flex' }}>

        {/* Sidebar with logo and details */}
        <Box sx={{
          width: '30%',
          height: '73vh',
          mt: 9,
         // border: '2px solid black',
          display: "flex",
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'space-between',
          gap: 2,
          px: 2,
          py: 3
        }}>
          <img src={hlf} alt="Retrax company logo" style={{ width: "200px", height: '190px' }} />
          <Typography variant="h4" fontWeight='bold' textAlign="center">HLF Market
 
 </Typography>
          <Typography sx={{ fontSize: '15px', textAlign: 'left',ml:4, color: 'darkblue' }}>
Hinduja Leyland Finance is a leading non-banking financial company in India, offering comprehensive financial solutions for commercial vehicles.

          </Typography>

          <Box component="fieldset" sx={{
            width: '200px',
            height: '100px',
            mt:2,
            backgroundColor: 'aliceblue',
            border: '2px solid darkblue',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box component="legend" sx={{ fontWeight: 'bold', color: 'red' }}>Domain</Box>
            <Box>Non-Banking Financial Company(Finance)



</Box>
          </Box>

          <Box component="fieldset" sx={{
            width: '200px',
            height: '100px',
            backgroundColor: 'aliceblue',
            border: '2px solid darkblue',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box component="legend" sx={{ fontWeight: 'bold', color: 'red' }}>Solution</Box>
            <Box>Prospecting and Verification


</Box>
          </Box>
        </Box>

        {/* Main details area */}
        <Box sx={{
        //  border: '2px solid black',
          width: '70%',
          height: "80vh",
          mt: 12,
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>

          {/* Problem Statement */}
          <Box component="fieldset" sx={{
            width: '90%',
            maxWidth: '700px',
            height: 'auto',
            border: '2px solid darkblue',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}>
            <Box component="legend" sx={{ fontWeight: 'bold', color: '#CC0000', fontSize: '20px' }}>
              Problem Statement
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" align="left">
Solution for sourcing loan applications and prospecting potential loan borrowers along with verification of demographic, financial and related scores for loan approval   
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    4,00,000+

                  </Typography>
                  <Typography variant="body2">
                    Loan approval applications to be processed every year

                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                   Avg. of 1000
</Typography>
                  <Typography variant="body2">
                    Loan approval applications to be analysed everyday
    </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    Rs. 8500 Crore+
</Typography>
                  <Typography variant="body2">
                  Assets to be managed and accounted for on a monthly basis

 </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Solutions Developed */}
          <Box component="fieldset" sx={{
            width: '90%',
            maxWidth: '700px',
            border: '2px solid darkblue',
            borderRadius: '5px',
            p: 2
          }}>
            <Box component="legend" sx={{ fontWeight: 'bold', color: '#CC0000', fontSize: '20px' }}>
              Solutions Developed
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2">
Mobile application that gathers data from field-agents for prospecting and verification along with self-service functions for instant loan approval 
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Self-Service features for immediate customer profile details and loan sanctions
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Sources over 1000+ applications per day, identifies financial status and outputs loan eligibility status

                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Secure methods and operations to ensure safety of sensitive user data during transmission

                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Tools Used */}
          <Box component="fieldset" sx={{
            width: '90%',
            maxWidth: '700px',
            border: '2px solid darkblue',
            borderRadius: '5px',
            p: 2
          }}>
            <Box component="legend" sx={{ fontWeight: 'bold', color: '#CC0000', fontSize: '20px' }}>
              Tools and Technology Used
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2
            }}>
              <Typography variant='body2'>PHP(Slim)</Typography>
              <Typography variant='body2'>Bootstrap</Typography>
              <Typography variant='body2'>MS-SQL</Typography>
              <Typography variant='body2'>Native Android</Typography>
              <Typography variant='body2'>Selenium</Typography>
            </Box>
          </Box>

        </Box>
      </Box>

      {/* Side colored sections */}
      <Box sx={{ width: '2%', height: "100vh", backgroundColor: "#599ED4" }}></Box>
      <Box sx={{
        width: '18%',
        height: "100vh",
        backgroundColor: "#CC0000",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
      }}>
        <Box sx={{
          width: '60%',
          height: '80vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column'
        }}>
          <Typography color='white' fontWeight='bold' fontSize='20px'>Results Achieved
</Typography>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Reduced Downtime

</Typography>
            <Typography variant='body2' color='white'>
achieved even after several users using the application at the same time
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>50K+ Downloads

</Typography>
            <Typography variant='body2' color='white'>
on Google Playstore enabling customers, Counter Staff and Field Agents nation-wide to check loan eligibility status 

            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Less than 5 Minutes

 
</Typography>
            <Typography variant='body2' color='white'>
              taken to process and approve loans for customers across the nation
   </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Retrax;
