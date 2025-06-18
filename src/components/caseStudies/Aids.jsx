import React from 'react';
import { Box, Typography } from '@mui/material';
import tnaids from "../../images/homeimg/tnaids.jpg";
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
          <img src={tnaids} alt="Retrax company logo" style={{ width: "130px", height: '120px' }} />
          <Typography variant="h4" fontWeight='bold' textAlign="center">Tamil Nadu State AIDS Control Society

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
Integrated system to replace manual Spreadsheet functions to maintain real-time data from patient data entry, inventory management of medicine and testing kits, to analytics and prediction for supply of relevant life-saving kits and medicines
              </Typography>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    35+
                  </Typography>
                  <Typography variant="body2">
                    districts in Tamil Nadu to be reached with live data across rural areas with legacy systems
</Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    4000+

                  </Typography>
                  <Typography variant="body2">
                    centres (ICTC, PHC and others) across the state present with active AIDS Support  


                  </Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: '166px' }}>
                  <Typography fontSize="18px" color="darkblue" fontWeight="bold">
                    2.3 Lakh+
                  </Typography>
                  <Typography variant="body2">
                    AIDS/HIV patients across government and private hospitals 
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
End-to-End Web Application to manage Supply Chain of life-saving drugs and testing kits ensure on-time delivery and administering across the state of Tamil Nadu with TANSACS and Hospital support agents 
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Engagement in field-work for gap analysis and problem discovery with regular communication with all stakeholders
                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Implemented solution on legacy systems, poor connectivity, and rural areas with appropriate training in 3000+ locations

                </Typography>
                <Typography variant="body2" color="#CC0000" sx={{ flex: 1, minWidth: '180px' }}>
Process spanning over data collection, stock maintenance, data reporting, analytics and prediction

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
            <Typography fontWeight='bold' fontSize='18px' color='white'>Avg. 3,00,000+

</Typography>
            <Typography variant='body2' color='white'>
testing kits completed and recorded on the system per month 
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Predictive Stock Management

</Typography>
            <Typography variant='body2' color='white'>
using real-time and historic data to ensure supply of testing kits and medicines in centres along with SMS and Email alerts for counsellors on patient and medicine records

            </Typography>
          </Box>

           <Box>
            <Typography fontWeight='bold' fontSize='18px' color='white'>Less than 60 seconds


</Typography>
            <Typography variant='body2' color='white'>
taken to complete data collection process with simple and intuitive data entry process

            </Typography>
          </Box>

          
        </Box>
      </Box>
    </Box>
  );
};

export default Retrax;
