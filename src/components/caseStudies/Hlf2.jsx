import React from 'react';
import { Box, Typography } from '@mui/material';
import hlf from "../../images/homeimg/hlf2.png";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';


const Retrax = () => {
  const navigate =useNavigate();

  return (
    <Box sx={{ width: '100%', height: "90vh", display: "flex" }}>
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
          <Typography variant="h4" fontWeight='bold' textAlign="center">HLF Connect

 
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
            <Box>Customer Application 



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
Need for avenues for customer facing actions to facilitate communication, account management and loan details with repayment schedules
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    3 Million+


                  </Typography>
                  <Typography variant="body2">
Customers present across India with varying EMI and service needs

                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                   Process Managed

</Typography>
                  <Typography variant="body2">
across functions of customers inclusive of account management digitally 
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
Bringing a HLF Office to the pocket of the customers, HLFConnect is an end-to-end customer-facing mobile application enabling customers to manage their account along with facilitating communication about re-payment and EMI updates with safe and secure features
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Timely alerts and notifications sent to customers based on EMI schedules 
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Easy management of account with instant payment statement of accounts for customers

                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Multi-lingual support across all functions (Tamil, Telugu, Malayalam, Kannada, Hindi, English) 

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
            <Typography fontWeight='bold' fontSize='18px' color='white'>Less than a minute


</Typography>
            <Typography variant='body2' color='white'>
taken to manage and gather details around account, loans and repayment schedules 
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>500K+ Downloads

</Typography>
            <Typography variant='body2' color='white'>
on Google Playstore enabling customers nation-wide to manage their HLF bank account 

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
