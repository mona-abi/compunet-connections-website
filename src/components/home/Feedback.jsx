import { Box, Card, CardContent, CardMedia, Typography, Avatar } from '@mui/material';
import React from 'react';
import feedback from '../../images/homeimg/feedback.png';
import review from '../../images/homeimg/review.png';
import milestone from '../../images/homeimg/gradient.png';

const Feedback = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#E8F5FF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily:'Inter'
      }}
    >
      {/* Image and Card Side by Side */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 15,
          gap: 4
        }}
      >
        {/* Left Image */}
       <Box sx={{ zIndex: 1 }}>
          <img
            src={feedback}
            alt="feedback"
            style={{ height: '624px', width: '819px',marginBottom:'90px' }}
          />
        </Box>

        {/* Testimonial Card overlapping */}
        <Card
          sx={{
            maxWidth: 480,
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 6,
            px: 4,
            py: 3,
            position: 'relative',
            zIndex: 2,
            ml: -15, // Overlap amount
            marginBottom:'110px'
          }}
        >
          <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{ fontSize: 24, color: '#2D3748' }}>
              Why <b>customers</b> love
            </Typography>
            <Typography sx={{ fontSize: 24, fontWeight: 'bold', color: '#1A202C', mb: 2 }}>
              working with us
            </Typography>

            <Typography sx={{ color: '#4A5568', fontFamily: 'Inter', fontSize: 18, mb: 3 }}>
              “Our experience with Compunet Connections has been very good and their turn around time
              for delivering websites is something that makes us work with them again and again.”
            </Typography>

            {/* Reviewer Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 ,flexDirection:'column'}}>
              <Avatar alt="review" src={review} sx={{ width: 110, height: 110 }} />
              <Box>
                <Typography sx={{ fontSize: 20, color: '#FBBF24',textAlign:'center',fontSize:'24px' }}>★★★★★</Typography>
                <Typography sx={{ fontWeight: 'bold', color: '#E53E3E',textAlign:'center',fontSize:'19px' }}>
                  Kynan Aguirre
                </Typography>
                <Typography sx={{ fontSize: 12, color: '#718096',textAlign:'center',fontSize:'19px' }}>
                  Product Creative Manager
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

    </Box>
  );
};

export default Feedback;
