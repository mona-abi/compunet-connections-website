import { Box } from '@mui/material';
import React from 'react';
import cms from '../../images/homeimg/cms.png';
import stuforia from '../../images/homeimg/stuforia.png';
import raqamyah from '../../images/homeimg/logo.webp';
import intellipro from '../../images/homeimg/intellipro.png';
import retrax from '../../images/homeimg/retrax.png';
import tnaids from '../../images/homeimg/tnaids.jpg';
import khadi from '../../images/homeimg/khadi.png';
import hlf from '../../images/homeimg/hlf.png';

const logos = [
  { src: cms, alt: "Sales", width: 225 },
  { src: raqamyah, alt: "Venba", width: 175 },
  { src: retrax, alt: "RetrAx", width: 195 },
  { src: tnaids, alt: "TNAIDS", width: 105 },
  { src: hlf, alt: "hlf", width: 205 },
  { src: intellipro, alt: "Intellipro", width: 195 },
  { src: khadi, alt: "Khadi", width: 175 },
  { src: stuforia, alt: "Stuforia", width: 185 },
];

const CompanyLogo = () => {
  return (
    <Box sx={{ overflow: 'hidden', width: '100%', height: 170 }}>
      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 30s linear infinite',
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {/* Render logos twice for continuous loop */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{
              width: logo.width,
              height: 'auto',
              marginRight: 110,
              objectFit: 'contain',
            }}
          />
        ))}
      </Box>

      {/* Keyframe animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default CompanyLogo;
