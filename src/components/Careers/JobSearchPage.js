import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const JobSearchPage = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [jobResults, setJobResults] = useState([
    { title: "MBA - Fresher", location: "Chennai, India", datePosted: "9 Feb 2024" },
    { title: "Animator", location: "Chennai, India", datePosted: "9 Feb 2024" },
  ]);

  const handleSearch = () => {
    setShowResults(true);
    // Normally, you would fetch job results based on user input from an API.
    console.log("Searching jobs for", location, category, jobTitle);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://source.unsplash.com/featured/?teamwork,office')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Find Your Dream Job Today!
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 3 }}>
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </Typography>

        {/* Job Search Form */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Select
            displayEmpty
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">Select Location</MenuItem>
            <MenuItem value="new-york">New York</MenuItem>
            <MenuItem value="san-francisco">San Francisco</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
          </Select>
          <TextField
            placeholder="Job Title or Company"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            sx={{ minWidth: 200 }}
          />
          <Select
            displayEmpty
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
            <MenuItem value="design">Design</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="error"
            onClick={handleSearch}
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Search Job
          </Button>
        </Box>

        {/* Job Search Results */}
        {showResults && (
          <Box mt={4}>
            <Typography variant="h4" color="error" gutterBottom>
              Job Results ({jobResults.length})
            </Typography>
            {jobResults.map((job, index) => (
              <Card key={index} sx={{ marginBottom: 2, border: "1px solid blue" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {job.location}
                    </Typography>
                  </Box>
                  <Box textAlign="right">
                    <Typography variant="subtitle2">
                      Posted on {job.datePosted}
                    </Typography>
                    <Button variant="contained" color="error"  onClick={() => navigate("/JobDetailsPage")}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
    
    </Box>
  );
};

export default JobSearchPage;
