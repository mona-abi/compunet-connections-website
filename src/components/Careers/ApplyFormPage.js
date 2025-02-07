import React, { useState } from "react";
import {
 
  TextField,
  Button,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Paper,
  Select,
  InputLabel,
  FormControl,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";
import { AttachFile, UploadFile } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from '../../images/careersimg/logo.png'

const ApplyFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91",
    cv: null,
    additionalFile: null,
    coverLetter: "",
    agreeTerms: false,
    allowContact: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    navigate("/application-success"); // Redirects after submission
  };
  const navigate = useNavigate();
  return (
    <div>
    <div>
    <Box
    sx={{
      
      width: "100%",
      height: "70px",
      display: "flex",
      backgroundColor: "#eef5fc",
      alignItems: "left",
      justifyContent: "left",
   
      overflow: "hidden",
    
     
    }}
  >
    <Typography
      variant="h4"
      color="error"
      sx={{
        fontWeight: "bold",
        background: "linear-gradient(to right, #CC0000, #599ED4)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        // mb: 2,
        marginLeft:'95px',
        mt: 2,
        fontFamily: "Inter",
      }}
    >
    Apply Now !
    </Typography>
  </Box>
  </div>
  <Container sx={{height:'800px'}}>
  <div style={{ textAlign: "left", marginBottom: "10px"  }}>
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <img src={logo} alt="logo" style={{ width: "30px", height: "30px" }} />
    <Typography variant="subtitle1" fontSize="15px" color="gray" gutterBottom>
      Compunet Connections
    </Typography>
  </div>

  <Typography variant="h6" fontWeight="bold" fontSize="30px">
    MBA - Fresher
  </Typography>

  <Typography variant="subtitle1" color="gray" fontSize="14px">
    Chennai, India
  </Typography>
</div>

      
       <hr></hr>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Personal Information
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: "bold" }}>First Name</Typography>
              <TextField
               
                   placeholder="First Name"
                fullWidth
                name="firstName"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography sx={{ fontWeight: "bold" }}>Last Name</Typography>
              <TextField
              
                fullWidth
                name="lastName"
                 placeholder="Last Name"
                 value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
              <TextField
                
                type="email"
              
                fullWidth
                name="email"
                  placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <Typography sx={{ fontWeight: "bold", mb: 1 }}>Phone Number</Typography>
    <TextField
      variant="outlined"
      fullWidth
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      required
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              sx={{ minWidth: 80 }}
              displayEmpty
              variant="standard"
            >
              <MenuItem value="+91">🇮🇳 +91</MenuItem>
              <MenuItem value="+1">🇺🇸 +1</MenuItem>
              <MenuItem value="+44">🇬🇧 +44</MenuItem>
            </Select>
          </InputAdornment>
        ),
      }}
    />
  </FormControl>
</Grid>

            <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>Upload CV</Typography>
              <Button
               
                startIcon={<AttachFile />}
                fullWidth
              >
                Upload CV
                <input
                  type="file"
                  hidden
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                />
              </Button>
              {formData.cv && (
                <Typography variant="body2">{formData.cv.name}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                startIcon={<UploadFile />}
                fullWidth
              >
                Upload Additional File
                <input
                  type="file"
                  hidden
                  name="additionalFile"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                />
              </Button>
              {formData.additionalFile && (
                <Typography variant="body2">{formData.additionalFile.name}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Cover Letter"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                }
                label="By submitting this application, I agree to the Privacy Policy."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="allowContact"
                    checked={formData.allowContact}
                    onChange={handleChange}
                  />
                }
                label="Yes, Compunet Connections can contact me about job opportunities."
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </form>
        
  </Container>
  <Box
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#eef5fc",
            position: "relative",
            overflow: "hidden",
          }}
        ></Box>
      </div>
 
  );
};

export default ApplyFormPage;
