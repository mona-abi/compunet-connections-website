import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../images/careersimg/logo.png";
import img from "../../images/contactImg/Ellipse.png";
import file from "../../images/careersimg/file-text-check.png";

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
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "143px",
            right:'20px',
              width: "157px",
              height: "162px",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
              opacity: 0.1,
            }}
          />
          <Typography
            variant="h4"
            color="error"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #CC0000, #599ED4)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginLeft: { xs: "50px", sm: "200px" },
              mt: 2,
              fontFamily: "Inter",
              textAlign: "center",
            }}
          >
            Apply Now !
          </Typography>
        </Box>
      </div>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
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
              <Typography sx={{ fontWeight: "bold" }}>First Name *</Typography>
              <TextField
                placeholder="First Name"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontWeight: "bold" }}>Last Name *</Typography>
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
              <Typography sx={{ fontWeight: "bold" }}>Email *</Typography>
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
                <Typography sx={{ fontWeight: "bold" }}>Phone Number *</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Enter your Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Select
                          name="countryCode"
                          disableUnderline
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
              <Typography sx={{ fontWeight: "bold" }}>Upload CV *</Typography>
              <Button
                variant="outlined"
                component="label"
                startIcon={<img src={file} alt="file icon" style={{ width: 24, height: 24 }} />}
                fullWidth
                sx={{
                  textTransform: "none",
                  justifyContent: "flex-start",
                  paddingLeft: "12px",
                }}
              >
                Resume.pdf
                <input type="file" hidden name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} />
              </Button>
              {formData.cv && <Typography variant="body2">{formData.cv.name}</Typography>}
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>Additional File *</Typography>
              <Button
                variant="outlined"
                component="label"
                startIcon={<img src={file} alt="file icon" style={{ width: 24, height: 24 }} />}
                fullWidth
                sx={{ textTransform: "none", justifyContent: "flex-start", paddingLeft: "12px" }}
              >
                Portfolio.Pdf
                <input type="file" hidden name="additionalFile" accept=".pdf,.doc,.docx" onChange={handleChange} />
              </Button>
              {formData.additionalFile && <Typography variant="body2">{formData.additionalFile.name}</Typography>}
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>Cover Letter</Typography>
              <TextField
                placeholder="Write a Letter"
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
                control={<Checkbox name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />}
                label="By submitting this application, I agree that I have read the Privacy Policy and confirm that compunet connections store my personal details to process my job application."
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="allowContact" checked={formData.allowContact} onChange={handleChange} />}
                label="Yes, compunet connections can contact me directly about specific future job opportunities."
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "#599ED4",
                    color: "white",
                    fontWeight: "bold",
                    padding: "12px",
                    width: { xs: "100%", sm: "220px" },
                    height: "50px",
                    textTransform: "none !important",
                    fontSize: "15px",
                    borderRadius: "30px",
                  }}
                >
                  Submit Application
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Box sx={{ width: "100%", height: "60px", backgroundColor: "#eef5fc" }} />
    </div>
  );
};

export default ApplyFormPage;
