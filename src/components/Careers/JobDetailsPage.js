import React from "react";
import { Box, Typography, Button, Grid, IconButton, Chip, Container } from '@mui/material';
import { LocationOn, Work, CalendarToday, Label, Person } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
const JobDetailsPage = () => {
  return (
    <Container>
      <Box
        mt={4}
        p={4}
        sx={{ backgroundColor: "rgba(240, 248, 255, 0.9)", borderRadius: 3 }}
      >
        <Box
      sx={{
        maxWidth: 700,
        margin: '50px auto',
        padding: 4,
        border: '1px solid #ddd',
        borderRadius: 2,
        background: 'linear-gradient(to right, #e0f7fa, #ffffff, #ffebee)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>
        Job <span style={{ color: 'blue' }}>Overview</span>
      </Typography>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" mb={1}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>Salary:</Typography>
            <Typography variant="body1">₹ 100000 - ₹150000 /year</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <LocationOn sx={{ mr: 1 }} />
            <Typography variant="body1">Chennai</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Work sx={{ mr: 1 }} />
            <Typography variant="body1">Full-Time</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <CalendarToday sx={{ mr: 1 }} />
            <Typography variant="body1">Posted on 9 Feb 2024</Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box display="flex" alignItems="center" mb={1}>
            <Label sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ mr: 1 }}>Job Tags:</Typography>
            <Chip label="Project Management" sx={{ mr: 1 }} />
            <Chip label="HR" sx={{ mr: 1 }} />
            <Chip label="Consulting" />
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Person sx={{ mr: 1 }} />
            <Typography variant="body1">Experience: Fresher</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
        <Box display="flex" alignItems="center">
          <ShareIcon sx={{ mr: 1 }} />
          <Typography variant="body1" sx={{ mr: 2 }}>Share this job:</Typography>
          <IconButton color="primary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary">
            <EmailIcon />
          </IconButton>
        </Box>

        <Button variant="contained" color="error" sx={{ borderRadius: '20px' }}>
          Apply Now
        </Button>
      </Box>
</Box>
        <Typography variant="h4" color="text.primary" gutterBottom>
          Job Description
        </Typography>
        <Typography paragraph>
          Currently, we have openings for MBA freshers who have the spark, confidence & zeal to learn something new every day.
        </Typography>

        <Typography variant="h4" color="text.primary" gutterBottom>
          Requirements
        </Typography>
        <ul>
          <li>Educational Background: A bachelor's degree in business administration or related field is required.</li>
          <li>Technical Acumen: Basic understanding or exposure to IT concepts.</li>
          <li>Analytical Skills: Ability to analyze data and make data-driven decisions.</li>
          <li>Communication Skills: Clear and effective communication (written and verbal).</li>
          <li>Problem-Solving Ability: Demonstrated ability to identify and implement solutions.</li>
          <li>Adaptability: Willingness to learn new technologies and methodologies.</li>
          <li>Teamwork & Collaboration: Ability to work with diverse stakeholders.</li>
          <li>Business Acumen: Understanding of business principles and market trends.</li>
          <li>Leadership Potential: Ability to demonstrate leadership qualities.</li>
        </ul>

        <Button variant="contained" color="error" sx={{ mt: 3 }}>
          Apply Now
        </Button>
      </Box>
    </Container>
  );
};

export default JobDetailsPage;
