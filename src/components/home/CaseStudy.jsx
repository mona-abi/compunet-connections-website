import {
  Box,
  CardMedia,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import React from 'react';
import tnpsc from '../../images/homeimg/TNPSC.png';
import retrax from '../../images/homeimg/retrax.png';
import raqamyah from '../../images/homeimg/logo.webp';
import cms from '../../images/homeimg/cms.png';
import australia from '../../images/homeimg/australia.png';
import { useNavigate } from 'react-router-dom';
const CaseStudy = () => {
    const read='Read more case studies ';
    const navigate=useNavigate();

  return (
    <Box
      sx={{
        maxWidth: '100%',
        height: '800px',
        backgroundColor: '#F5FAFF',
        px: 4,
        py: 6,
        boxSizing: 'border-box',
      
         fontFamily:'Inter'
      }}
    >
      {/* Heading */}
      <Box sx={{ mb: 4,display:'flex',alignItems:'center',flexDirection:'column' }}>
       <Box sx={{ mt:5,height: 5, width: 80, background: 'linear-gradient(90deg,#599ED4,#CC0000)' }} />
        <Typography variant="h4" >
          Our recent
        </Typography>
        <Typography variant="h4" fontWeight="bold" >
          Case studies
        </Typography>
      </Box>
      <Typography  
      onClick={() => {
        navigate("/case-studies");
        window.scrollTo(0,0);
      }}

  sx={{
    cursor: 'pointer',
    color: '#CC0000',
    mt: 1,
    display:'flex',
    justifyContent:'flex-end',
    fontWeight: 'bold',
    marginBottom:'30px'
  }}
>
  {read}
</Typography>  
      <Box sx={{display:'flex',justifyContent:'space-around'}}>
<Card
  sx={{
    maxWidth: 330,
    borderRadius: 3,
    boxShadow: 3,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(238, 233, 255, 1)',
  }}
>
  {/* Image container with background */}
  <Box
    sx={{
      height: 190,
      width: '100%',
      backgroundColor: 'rgba(206, 192, 255, 1)', // light image background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CardMedia
      component="img"
      image={retrax}
      alt="retrax"
      sx={{
        height: 260,
        objectFit: 'contain',
        transform: 'scale(1.05, 1)', // Slightly increase width
        transition: 'transform 0.3s ease-in-out',
      }}
    />
  </Box>

  <CardContent sx={{ flexGrow: 1 }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Retrax, Australia
    </Typography>
    <Typography variant="body2" color="text.secondary">
      RetreX is a smart property sales tool built by top real estate agents to deliver next-gen market insights for agents, buyers, and sellers.
    </Typography>
  </CardContent>

  <CardActions sx={{ px: 2, pb: 3, pt: 2 }}>
    <Button
      fullWidth
      variant="contained"
      onClick={()=>{
        navigate("/retrax")
         window.scrollTo(0, 0); }}
      sx={{
        backgroundColor: '#CC0000',
        '&:hover': { backgroundColor: '#a80000' },
        color: 'white',
        borderRadius: 1,
        textTransform: 'none',
        fontWeight: 500,
      }}
    >
      View
    </Button>
  </CardActions>
</Card>


      <Card
  sx={{
    maxWidth: 330,
    borderRadius: 3,
    boxShadow: 3,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(240, 255, 247, 1)',
  }}
>
  {/* Image Container with background */}
  <Box
    sx={{
      height: 190,
      width: '100%',
      backgroundColor: 'rgba(181, 255, 208, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CardMedia
      component="img"
      image={raqamyah}
      alt="raqamyah"
      sx={{
        height: 170,
        objectFit: 'contain',
        transform: 'scale(1.05, 1)', // ✅ correct usage
        transition: 'transform 0.3s ease-in-out',
      }}
    />
  </Box>

  <CardContent sx={{ flexGrow: 1 }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Raqamyah, Saudi
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Peer-to-peer fintech company by Saudi Arabian Monetary Authority (SAMA) operating in
      Europe & Africa, Gulf Cooperation Council (GCC), Middle East.
    </Typography>
  </CardContent>

  <CardActions sx={{ px: 2, pb: 3, pt: 2 }}>
    <Button
      fullWidth
      variant="contained"
      onClick={()=>{
        navigate("/raqamyah")
        window.scrollTo(0,0)
      }}
      sx={{
        backgroundColor: '#CC0000',
        '&:hover': { backgroundColor: '#a80000' },
        color: 'white',
        borderRadius: 1,
        textTransform: 'none',
        fontWeight: 500,
      }}
    >
      View
    </Button>
  </CardActions>
</Card>


      <Card
  sx={{
    maxWidth: 330,
    borderRadius: 3,
    boxShadow: 3,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E0F3FE',
  }}
>
  {/* Image container with background */}
  <Box
    sx={{
      height: 190,
      width: '100%',
      backgroundColor: 'rgba(128, 217, 255, 1)', // light image bg
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CardMedia
      component="img"
      image={cms}
      alt="cms"
      sx={{
        height: 190,
        objectFit: 'contain',
        transform: 'scale(1.05, 1)', // Slightly increased width
        transition: 'transform 0.3s ease-in-out',
      }}
    />
  </Box>

  <CardContent sx={{ flexGrow: 1 }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      CMS, Australia
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Data Mining & analytics solution to help brands to analyse their retail sales across Australia
    </Typography>
  </CardContent>

  <CardActions sx={{ px: 2, pb: 3, pt: 2 }}>
    <Button
      fullWidth
      variant="contained"
      onClick={()=>{
        navigate("/cms");
        window.scrollTo(0,0);
      }}
      sx={{
        backgroundColor: '#CC0000',
        '&:hover': { backgroundColor: '#a80000' },
        color: 'white',
        borderRadius: 1,
        textTransform: 'none',
        fontWeight: 500,
      }}
    >
      View
    </Button>
  </CardActions>
</Card>

      
      </Box>



    </Box>
  );
};

export default CaseStudy;
