import React from 'react';
import { Box, Typography } from '@mui/material';
import hlf from "../../images/homeimg/hlf2.png";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';


const Retrax = () => {
  const navigate =useNavigate();

  return (
    <Box sx={{ width: '100%', height: "100vh", display: "flex" }}>
      <Box
            sx={{mt:10,ml:6}}/>
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
          <Typography variant="h4" fontWeight='bold' textAlign="center">HLF Collect

 
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
            <Box>Field Force Management – Collection Executive



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
Leakage of Revenue during Every-Month-Interest (EMI) Collection, from over three million active customers across India
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    3300+

                  </Typography>
                  <Typography variant="body2">
                    Collection Agents to be managed across India


                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                   2000+
</Typography>
                  <Typography variant="body2">
                    Branches across various urban and rural parts of India

    </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    Rs. 24,000 Crore+
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
Collection Executive Field Force Management Mobile Application making it easy to be used by the 3300+ collection agents across India with Enterprise Resource Planning software integrated in the back-end with safe and secure operations
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
GPS and live-tracking options integrated with the application for real-time collection activity monitoring
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Easy management and scheduling of Day Plan of Collection Executive and related report generation

                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
App Functioning irrespective of location, internet strength and related constraints with multi- language support

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
            <Typography fontWeight='bold' fontSize='18px' color='white'>Rs 80L+


</Typography>
            <Typography variant='body2' color='white'>
worth revenue leakage identified within Day 1 of Application Launch in one region
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Time Reduced


</Typography>
            <Typography variant='body2' color='white'>
through effective and quick route planning mechanisms to achieve collection in minimum time

            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>70% Timely EMI payments


 
</Typography>
            <Typography variant='body2' color='white'>
              achieved through rightly and actively  engaging with executives and customers

   </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Retrax;
