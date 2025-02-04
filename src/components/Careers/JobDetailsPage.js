import React from "react";
import { Box, Button, Container, Typography, Card, CardContent, Grid } from "@mui/material";

const JobDetailsPage = () => {
  return (
    <Container>
      <Box
        mt={4}
        p={4}
        sx={{ backgroundColor: "rgba(240, 248, 255, 0.9)", borderRadius: 3 }}
      >
        <Typography variant="h3" color="error" gutterBottom>
          Job Overview
        </Typography>

        <Grid container spacing={3} sx={{ marginBottom: 4 }}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Salary</Typography>
                <Typography>₹ 100000 - ₹150000 / year</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Location</Typography>
                <Typography>Chennai</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Job Type</Typography>
                <Typography>Full - Time</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Experience</Typography>
                <Typography>Fresher</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

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
