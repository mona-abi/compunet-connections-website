import React from 'react';
import { Box, Typography } from '@mui/material';
import raqa from "../../images/homeimg/raqamyah.webp";

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
          <img src={raqa} alt="Retrax company logo" style={{ width: "200px", height: '120px' }} />
          <Typography variant="h4" fontWeight='bold' textAlign="center">Raqamyah

 </Typography>
          <Typography sx={{ fontSize: '15px', textAlign: 'left',ml:4, color: 'darkblue' }}>
Raqamyah is a leading Saudi-based fintech platform licensed by the Saudi Central Bank to provide peer-to-peer lending. It connects SMEs with individual and institutional investors, enabling fast, transparent, and Shariah-compliant financing solutions.          </Typography>

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
            <Box>Banking & Finance


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
            <Box>Crowd-Lending Platform

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
Need for Business-to-Business Crowd-Lending Platform that operates on the Sharia-Compliant Finance Methods based out of Middle East 
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    10k+
                  </Typography>
                  <Typography variant="body2">
                    INVESTORS

                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    100+ 

                  </Typography>
                  <Typography variant="body2">
                    Borrowers

                  </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    66 Million

                  </Typography>
                  <Typography variant="body2">
               Profit of SAR last year

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
Mobile and Web Application with Buyer and Lender-facing portals facilitate seamless transactions and lending avenues
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Data analytics helps investors make smart decisions by tracking trends, risks, and portfolios </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Around 300 loans are processed every year and Agreements are signed online and loans will be provided to the borrowers.
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Loan documents are auto-generated in Arabic; POS loan returns are simplified using daily sales data.                </Typography>
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
              <Typography variant='body2'>MySQL</Typography>
              <Typography variant='body2'>Next.js</Typography>
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
            <Typography fontWeight='bold' fontSize='18px' color='white'>Enhanced User
</Typography>
            <Typography variant='body2' color='white'>
 experience in both mobile (Android & iOS) and web applications with 1K plus users in Android and 7.67K users in iOS in Saudi Arabia.
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>60% retention rate
</Typography>
            <Typography variant='body2' color='white'>
  More than 60% of the investors have invested in more than one opportunity.Borrower screening is done in less than 5 minutes
            </Typography>
          </Box>

          
        </Box>
      </Box>
    </Box>
  );
};

export default Retrax;
