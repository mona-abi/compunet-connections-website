import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const jobListings = [
  { title: 'MBA - Fresher', location: 'Chennai, India', datePosted: '9 Feb 2024' },
  { title: 'Animator', location: 'Chennai, India', datePosted: '9 Feb 2024' },
];

const JobListings = () => (
  <Box sx={{ mt: 5 }}>
    <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
      Career Openings (2)
    </Typography>
    <Grid container spacing={3}>
      {jobListings.map((job, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <CardContent>
              <Typography variant="h6">{job.title}</Typography>
              <Typography color="text.secondary">{job.location}</Typography>
              <Typography color="text.secondary">Posted on {job.datePosted}</Typography>
            </CardContent>
            <Button variant="contained" color="secondary">
              Apply Now
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default JobListings;
