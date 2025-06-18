import React from 'react';
import { Box, Typography } from '@mui/material';
import cms from "../../images/homeimg/cms.png";

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
          <img src={cms} alt="Retrax company logo" style={{ width: "210px", height: '120px' }} />
          <Typography variant="h4" fontWeight='bold' textAlign="center">Competitive Marketing System </Typography>
          <Typography sx={{ fontSize: '15px', textAlign: 'left',ml:4, color: 'darkblue' }}>
CMS tracks daily retailer press, catalogue, electronic data, and internet activity, offering email alerts, a web-based reporting platform, and benchmark reports based in Sydney, Australia with services offered across Australia and New Zealand
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
            <Box>Retail Intelligence
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
            <Box>Technology Partner</Box>
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
On an outlook for a trusted technology partner to support extensive data services on a routine basis with aids in technology development and digital application management  
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '250px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    Processes
                  </Typography>
                  <Typography variant="body2">
                    everything - virtual assistance, technology partner and data science
                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '250px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    FMCD Analysis

                  </Typography>
                  <Typography variant="body2">
                    in product and brand space to provide retail players data on price and marketing solutions

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
As an end-to-end technology partner, ensure complete reliable and trusted delivery and implementation of retail data analytics solutions sourcing data from various retail websites and performing brand and product analytics
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Web Application that reads data based on each product and brand listed across several retail chains in Australia
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
                 Offers Customized Reporting Application with appropriate data visualisations

                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
                  Useful for manufacturers and retail agents to understand real-time advertising and price parameters

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
              <Typography variant='body2'>Bootstrap</Typography>
              <Typography variant='body2'>MySQL</Typography>
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
            <Typography fontWeight='bold' fontSize='18px' color='white'>130+</Typography>
            <Typography variant='body2' color='white'>
retail outlets and chains analysed for live data across Australia for brand and product analytics
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Extensive</Typography>
            <Typography variant='body2' color='white'>
              real-time data crawled and published everyday for retail data and analysis in Australia and New Zealand

            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Our Services Explained 
</Typography>
            <Typography variant='body2' color='white'>
              From Data Science to virtual assistance, product matching to data visualisation, and all reliable technology outputs. 

            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Retrax;
