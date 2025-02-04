// FormPage.js

import React from 'react';
import { Box, Grid, TextField, Button, Typography, Paper, InputAdornment } from '@mui/material';
import side from '../../images/blogsimg/Group.png';
import { Formik } from "formik";
import * as Yup from "yup";
import { CalendarToday, Email, Person } from '@mui/icons-material';
const FormPage = () => {
     const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        date: Yup.string().required("Select a date"),
        message: Yup.string().required("Message cannot be empty"),
      });
  return (
    <div>
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffff', padding: 2 }}>
      {/* <Paper elevation={3} sx={{ maxWidth: 900, width: '100%', overflow: 'hidden' }}> */}
        <Grid container>
          {/* Left Side Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: 100, md: '600px' },
                width:'600px',
                backgroundImage: `url(${side})`,  // Replace with your image path
             
              }}
            />
          </Grid>

          {/* Right Side Form */}
          <Box sx={{ flex: 1, background: "#fff", padding: "30px" }}>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              date: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              alert("Form submitted successfully!");
              console.log(values);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <Typography variant="h5"  fontSize="13px" color='#CC0000'>
                Share your thoughts and let us know how we can help you !
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, fontSize: "23px",fontWeight:'bold' }}>
                Leave a comment
                </Typography>

                <Typography sx={{ fontWeight: "bold" }}>Full Name</Typography>
                <TextField
                  fullWidth
                  name="fullName"
                  placeholder="Enter your name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                  sx={{
                    mb: 2,
                    backgroundColor: "#FFF1F1",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#CC0000",
                      },
                      "&:hover fieldset": {
                        borderColor: "#CC0000",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#CC0000 !important",
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Email & Date Fields */}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
                    <TextField
                      fullWidth
                      name="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{
                        mb: 2,
                        backgroundColor: "#FFF1F1",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#CC0000",
                          },
                          "&:hover fieldset": {
                            borderColor: "#CC0000",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#CC0000 !important",
                          },
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email sx={{ color: "black" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  </Grid>
                
                {/* Message Field */}
                <Typography sx={{ fontWeight: "bold" }}>Message</Typography>
                <TextField
                  fullWidth
                  name="message"
                  placeholder="Leave a comment..."
                  multiline
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                  sx={{
                    mb: 2,
                    backgroundColor: "#FFF1F1",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#CC0000",
                      },
                      "&:hover fieldset": {
                        borderColor: "#CC0000",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#CC0000 !important",
                      },
                    },
                  }}
                />

                {/* Submit Button */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: "linear-gradient(to right, #CC0000, #FF6666)",
                      color: "white",
                      fontWeight: "bold",
                      padding: "12px",
                      width: "180px",
                      height: "50px",
                      textTransform: "none !important",
                      fontSize: "15px",
                      borderRadius: "30px",
                    }}
                  >
                  Post comment
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
       

    
        </Grid>
        
      {/* </Paper> */}
      
   
    </Box>
  
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

export default FormPage;