import React from 'react';
import { Box, Typography } from '@mui/material';
import tnsta from "../../images/homeimg/tnsta.png";

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
          <img src={tnsta} alt="Retrax company logo" style={{ width: "150px", height: '120px' }} />
          <Typography variant="h4" fontWeight='bold' textAlign="center">Tamil Nadu State Transport Authority
 </Typography>
          <Typography sx={{ fontSize: '15px', textAlign: 'left',ml:4, color: 'darkblue' }}>
Tamil Nadu Transport Department, a Government Department, manages public transit, regulates entities, and facilitates state projects.
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
            <Box>Government

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
            <Box>Supply Chain Management
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
Need for overlooking end-to-end Reflective Tape manufacture, procurement, and supply functions across the state of Tamil Nadu 
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    35+
                  </Typography>
                  <Typography variant="body2">
                    districts in Tamil Nadu to be reached with live supply data 

                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    100+

                  </Typography>
                  <Typography variant="body2">
                    RTOs to be reached across the state with remote and legacy systems

                  </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    2500+

                  </Typography>
                  <Typography variant="body2">
                    reflective tapes needed to be transported across the state 


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
A web application to deal with supply chain management of the Reflective Tape across stages of manufacture to supply across the state of Tamil Nadu among the Road Transport Offices  
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Application implemented across RTOs in Tamil Nadu inclusive of remote and rural areas 
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
QR-Code based certification and validation system put in place for tracking

                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Training services offered to RTOs and officers to execute proper usage of software

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
            <Typography fontWeight='bold' fontSize='18px' color='white'>Increased Compliance
</Typography>
            <Typography variant='body2' color='white'>
among the RTOs and transport authorities to adhere to standards maintained in reflective tapes and prevention of road accidents
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Live Time Monitoring
</Typography>
            <Typography variant='body2' color='white'>
of entire process associated with Reflective Tape supply across the state along with active adherence checks

            </Typography>
          </Box>

          
        </Box>
      </Box>
    </Box>
  );
};

export default Retrax;
