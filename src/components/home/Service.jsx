import React from 'react';
//import service from '../../images/homeimg/getstart2.jpeg';
import { Box, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import gradient from '../../images/homeimg/gradient.png';




const Service = () => {

    const data=[
         {title:'Mobile, Web & Cloud App Development',desc:'We design and develop intuitive, high-performance apps for iOS & Android, tailored to meet your business objectives & deliver an exceptional user experience.',icon:<AppShortcutOutlinedIcon sx={{ color: 'black', fontSize: 35 }}/>}
        ,{title:'QA & Testing Services',desc:'We offer manual and automated testing to identify bugs, improve performance, and deliver flawless user experiences, helping you launch with confidence."',icon:<QuizOutlinedIcon sx={{ color: 'black', fontSize: 35 }}/>}
        ,{title:'Cyber Security & Services',desc:'As technology continues to advance & shape the way we do business, the importance of protecting against cyber threats has become increasingly critical. ',icon:<SecurityOutlinedIcon sx={{ color: 'black', fontSize: 35 }}/>}
        ,{title:'ODOO Services',desc:'We specialize in building scalable, secure & user-friendly web solutions that cater to your unique comprehensive ODOO services tailored to meet the diverse needs of enterprises. ',icon:<DesktopMacOutlinedIcon sx={{ color: 'black', fontSize: 35 }}/>}
        ,{title:'Data & Denodo Services',desc:'We leverage our deep industry knowledge to deliver customized Data & Denodo solutions that enhance data integration, management & utilization',icon:<ShoppingCartOutlinedIcon sx={{ color: 'black', fontSize: 35 }}/>}
        ,{title:'IT Staffing',desc:'Through in-depth consultations with your team, we aim to gain a comprehensive understanding of your immediate and long-term staffing needs.',icon:<DesktopMacOutlinedIcon sx={{ color: 'black', fontSize: 35 }}/>}];
  return (
   <Box
  sx={{
    backgroundColor: '#E8F5FF' ,
    position: 'relative',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    maxWidth: '100%',
    height:1000,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    textAlign:'center',
    color:'white',
    pt: 6, // Padding top
    pb: 1,  // Padding bottom
    fontFamily:'Inter'
  }} >

   <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', mb: 8}}>
  <Typography variant='h3' sx={{fontWeight:'bold',color:'black'}} >Services we offer</Typography>
  <Box sx={{background: 'linear-gradient(90deg,#599ED4,#CC0000)',width:130,height:3,mt:1}}></Box>
</Box>


    
    <Box sx={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 6,
  maxWidth: 1200,
  width: '100%',
}}
>
  {data.map(item => (
    <ServiceCard 
      key={item.title}  // always add a key in map!
      title={item.title}
      desc={item.desc}
      icon={item.icon}
    />
  ))}
</Box>

    <Box
            sx={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 400,
            }}
          >
            <img
              src={gradient}
              alt="gradient"
              style={{ display: 'block', width: '148%' }}
            />
            <Typography
              sx={{
                position: 'absolute',
                top: '25%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontWeight: 'normal',
                fontSize: 25,
                whiteSpace: 'nowrap',
              }}
            >
              Your Technology Partner with
            </Typography>
            <Typography
              sx={{
                position: 'absolute',
                top: '55%',
                left: '62%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 23,
                whiteSpace: 'nowrap',
              }}
            >
              Right-Sized,Priced Software Solutions
            </Typography>
          </Box>

    </Box>
  )
}

export default Service;
