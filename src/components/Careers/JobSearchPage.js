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
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg from "../../images/careersimg/group.png";
import chat from "../../images/contactImg/LogoWhite .png";

import SearchIcon from "@mui/icons-material/Search";
const JobSearchPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [showResults, setShowResults] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

 

  const [jobResults, setJobResults] = useState([
    {
      id: 1,
      title: "MBA - Fresher",
      location: "Chennai, India",
      datePosted: "9 Feb 2024",
    },
    { id: 2,title: "Animator", location: "Chennai, India", datePosted: "9 Feb 2024" },
  ]);

  const handleSearch = () => {
    setShowResults(true);
  };
  const handleApply = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  return (
    <>
 <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
     

        fontFamily: "Inter",
        padding: isMobile ? 2 : 0,
      }}
    >
      <Container sx={{ textAlign: "center", color: "#FFF" }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", fontSize: isMobile ? "2rem" : "3rem" ,}}>
          Find Your Dream Job Today!
        </Typography>
        <Typography sx={{ marginBottom: 3, fontSize: "15px", marginTop: "-15px" }}>
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </Typography>

        {/* Job Search Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            borderRadius: 2,
            boxShadow: 3,
            width: isMobile ? "100%" : "747px",
            border: "2px solid #CC0000",
            margin: "auto",
            padding: isMobile ? "10px" : "0",
            height: isMobile ? "auto" : "65px",
          }}
        >
          <Select
            displayEmpty
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="standard"
            disableUnderline
            sx={{
              minWidth: isMobile ? "100%" : 180,
              marginBottom: isMobile ? 2 : 0,
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:before, &:after": { display: "none" },
            }}
          >
            <MenuItem value="">Select Location</MenuItem>
            <MenuItem value="new-york">New York</MenuItem>
            <MenuItem value="san-francisco">San Francisco</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
          </Select>

          {!isMobile && <div style={{ width: "1px", height: "30px", background: "black", margin: "0 10px" }}></div>}

          <TextField
            placeholder="Job Title or Company"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              minWidth: isMobile ? "100%" : 200,
              marginBottom: isMobile ? 2 : 0,
              "& .MuiInputBase-root": { border: "none" },
            }}
          />

          {!isMobile && <div style={{ width: "1px", height: "30px", background: "black", margin: "0 10px" }}></div>}

          <Select
            displayEmpty
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="standard"
            disableUnderline
            sx={{
              minWidth: isMobile ? "100%" : 180,
              marginBottom: isMobile ? 2 : 0,
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:before, &:after": { display: "none" },
            }}
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
            <MenuItem value="design">Design</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
          </Select>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#CC0000",
              color: "white",
              fontSize: "15px",
              textTransform: "none",
              width: isMobile ? "100%" : "auto",
              borderRadius: isMobile ? "5px" : "0 5px 5px 0",
              display: "flex",
              alignItems: "center",
              height: isMobile ? "45px" : "65px",
              justifyContent: "center",
              gap: "8px",
            }}
            onClick={handleSearch}
          >
            <SearchIcon />
            Search Job
          </Button>
        </Box>
      </Container>
    </Box>

      {/* Job Search Results Below the Background Image */}

      {showResults && (
  <Box
    sx={{
      background:
        "linear-gradient(to left, #CC0000, #FFFFFF, #FFFFFF, #599ED4)",
      width: "100%",
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: 2,
      px: 2,
    }}
  >
    <Typography
      variant="h5"
      color="error"
      sx={{
        fontWeight: "bold",
        background: "linear-gradient(to right, #CC0000, #599ED4)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        textAlign: "center",
        fontFamily: "Inter",
      }}
    >
      Career Openings ({jobResults.length})
    </Typography>
  </Box>
)}

{showResults && (
  <Container sx={{ mt: 2, width: "100%" }}>
    <Grid container spacing={2} justifyContent="center">
      {jobResults.map((job, index) => (
        <Grid item xs={12} sm={10} md={8} key={index}>
          <Card
            sx={{
              border: "2px solid #008FFF",
              boxShadow: 2,
              borderRadius: "10px",
              transition: "0.3s",
              "&:hover": { boxShadow: 5 },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ flex: 1, textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.location}
                </Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: "center", mt: { xs: 1, sm: 0 } }}>
                <Typography variant="subtitle2">
                  Posted on {job.datePosted}
                </Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: "right", mt: { xs: 1, sm: 0 } }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "none", fontSize: "15px" }}
                  onClick={() => handleApply(job.id)}
                >
                  Apply Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>

      )}
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#eef5fc",
          position: "relative",
          overflow: "hidden",
        }}
      ></Box>
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            padding: "10px 20px",
            color: "#000",
            fontWeight: "bold",
            border: "2px solid #599ed4",
            borderRadius: "15px 0 15px 0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={chat} alt="Chat" style={{ width: 24, height: 24 }} />
          Talk to Us
        </Button>
      </Box>
    </>
  );
};

export default JobSearchPage;
