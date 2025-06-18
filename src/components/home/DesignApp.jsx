import React from 'react';
import back from '../../images/homeimg/back.jpg';
import snake from '../../images/homeimg/snake.png';
import { Box, Typography, Container } from '@mui/material';
import tag from '../../images/homeimg/tag.png';
import heart from '../../images/homeimg/heart.png';
import lock from '../../images/homeimg/lock.png';
import protection from '../../images/homeimg/lens.png';
import shield from '../../images/homeimg/shield.png';
import rocket from '../../images/homeimg/rocket.png';

const DesignApp = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
        py: 6,
        fontFamily: 'Inter',
      }}
    >
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ height: 5, width: 80, mx: 'auto', background: 'linear-gradient(90deg,#599ED4,#CC0000)', mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 1 }}>
            Why To Choose
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Compunet Connections
          </Typography>
        </Box>

        {/* Top Row Cards */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 3,marginRight:'180px',gap:6 }}>
          {[
            {
              title: 'UX Driven Engineering',
              desc: `Projects are driven by designers and they make sure design & experiences translate to code.`,
            },
            {
              title: 'Proven Experience & Expertise',
              desc: `Experienced team with industry-recognized certifications.`,
            },
            {
              title: 'Code Reviews',
              desc: `With our code review services, you can boost your software’s reliability & maintainability, paving the way for successful project outcomes & a seamless user experience.`,
            },
          ].map((item, index) => (
            <Box key={index} sx={{ width: '276px', mb: 2,alignItems:'center'}}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 1,textAlign:'center' }}>{item.title}</Typography>
              <Typography sx={{ color: '#595959', fontSize: 15,textAlign:'center' }}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>

        {/* Snake Image Centered */}
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', mb: 4 }}>
          <img src={snake} alt="snake" style={{ height: 260, width: '100%', maxWidth: 1200 }} />

          {/* Circles with icons */}
          <Box
            sx={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'space-evenly',
              gap: 9,
              zIndex: 2,
            }}
          >
            {[
              { color: '#FF6363', icon: rocket },
              { color: '#F9C20F', icon: tag },
              { color: '#6CC04A', icon: heart },
              { color: '#6E56FF', icon: shield },
              { color: '#FF993A', icon: protection },
              { color: '#6ABEFF', icon: lock },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={item.icon}
                  alt={`icon-${index}`}
                  style={{
                    maxWidth: '60%',
                    maxHeight: '60%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom Row Cards */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',alignItems:'center' ,marginLeft:'180px',gap:6}}>
          {[
            {
              title: 'Developing Shared Understanding',
              desc: `We foster open communication to ensure all stakeholders share a clear vision.`,
            },
            {
              title: 'Security & Intellectual Property (IP)',
              desc: `Our robust security solutions are designed to protect your sensitive data from evolving threats ensuring peace of mind.`,
            },
            {
              title: 'QA & Testing Services',
              desc: `We focus on enhancing functionality, usability & security, delivering detailed reports & actionable insights for continuous improvement.`,
            },
          ].map((item, index) => (
            <Box key={index} sx={{ width: '276px', mb: 4,alignItems:'center'}}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 1,textAlign:'center' }}>{item.title}</Typography>
              <Typography sx={{ color: '#595959', fontSize: 15,textAlign:'center' }}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DesignApp;
