import React from 'react';
import { Box, Typography } from '@mui/material';
import retrax from "../../images/homeimg/retrax.png";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';



const Retrax = () => {
  const navigate =useNavigate();
  return (
    <Box sx={{ width: '100%', height: "100vh", display: "flex" }}>
      <KeyboardBackspaceIcon  
       onClick={() => navigate(-1)}
      sx={{mt:10,ml:3}}/>
      {/* Main content area */}
      <Box sx={{ width: '80%', display: 'flex' }}>

        {/* Sidebar with logo and details */}
        <Box sx={{
          width: '30%',
          height: '73vh',
          mt: 12,
         // border: '2px solid black',
          display: "flex",
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'space-between',
          gap: 2,
          px: 2,
          py: 3
        }}>
          <img src={retrax} alt="Retrax company logo" style={{ width: "280px", height: '170px' }} />
          <Typography variant="h4" fontWeight='bold' textAlign="center">retreX</Typography>
          <Typography sx={{ fontSize: '15px', textAlign: 'left',ml:4, color: 'darkblue' }}>
            Retrex, an Australian Real Estate Agent aid, is a Real Estate Market Intelligence Platform that processes real-time market data with communication and interaction options.
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
            <Box>Real Estate</Box>
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
            <Box>Market Intelligent Tools</Box>
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
                Real-time Market Intelligence Platform for Real Estate Transactions between buyer and agent with market data while facilitating communication and interaction options with compliance to Australian Real-Estate Standards.
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '250px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    Marketplace Setup
                  </Typography>
                  <Typography variant="body2">
                    to integrate the features and processes of all functions of real-estate 
                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '250px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    Management and Monitoring
                  </Typography>
                  <Typography variant="body2">
                    of documents, processes and stakeholders across functions and identifying dependencies and delays
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
                A web and mobile application with buyer and seller side features to post, manage and showcase property listings with an interaction channel along with property bidding and post-buy document management system with live-time market data.
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
                  Multi-lingual application for Australian deployment and progress to other parts of the globe
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
                  Live-time market data and communication channels for easy property and buyer management
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
                  Integrated platform to perform end-to-end real-estate functions like none other in the current market
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
              <Typography variant='body2'>PHP</Typography>
              <Typography variant='body2'>React</Typography>
              <Typography variant='body2'>React Native</Typography>
              <Typography variant='body2'>MySQL</Typography>
              <Typography variant='body2'>Nginx</Typography>
              <Typography variant='body2'>Selenium</Typography>
              <Typography variant='body2'>Jenkins</Typography>
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
          <Typography color='white' fontWeight='bold' fontSize='20px'>Solution Benefits</Typography>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Increased Transparency</Typography>
            <Typography variant='body2' color='white'>
              through real-time document and property-related tracking reducing anxiety among users
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Simplified Communication</Typography>
            <Typography variant='body2' color='white'>
              with messaging platform for agent and buyer interactions
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Live Market Data</Typography>
            <Typography variant='body2' color='white'>
              made available to facilitate informed decision making among the users of platform
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Retrax;
