import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: 365,
          height: 265,
          backgroundColor: '#F2F9FF',
          borderRadius: 2,
          boxShadow: 3,
          fontFamily: 'Inter',
          margin: 'auto', // to center the card
        }}
      >
        <CardContent
          sx={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          {/* Icon + Title Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Gradient Circle with Icon */}
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                background: 'linear-gradient(90deg,#599ED4,#CC0000)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 65,
                  height: 65,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </Box>
            </Box>

            {/* Title */}
            <Typography variant="h5" sx={{ color: '#2D3748', fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Box>

          {/* Description */}
          <Typography variant="body1" sx={{ color: '#718096', mt: 1 }}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ServiceCard;
