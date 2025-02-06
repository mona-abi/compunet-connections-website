import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import side from "../../images/blogsimg/Group.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { Email, Person } from "@mui/icons-material";

const FormPage = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message cannot be empty"),
  });

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffff",
          padding: "20px",
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: 900, width: "100%" }}>
          {/* Left Side Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "470px" },
                height: { xs: 400, md: "470px" },
                backgroundImage: `url(${side})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>

          {/* Right Side Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ background: "#fff", padding: "20px" }}>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
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
                    <Typography variant="h5" fontSize="12px" color="#CC0000">
                      Share your thoughts and let us know how we can help you!
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 3, fontSize: "23px", fontWeight: "bold" }}
                    >
                      Leave a comment
                    </Typography>

                    <Typography sx={{ fontWeight: "bold" }}>
                      Full Name
                    </Typography>
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
                        width: "100%", // Increased width
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person sx={{ color: "black" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

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
                        width: "100%", // Increased width
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email sx={{ color: "black" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

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
                        width: "100%", // Increased width
                      }}
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          name="saveInfo"
                          checked={values.saveInfo}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label="Save my name, email & website in this browser for the next time I comment."
                      componentsProps={{
                        typography: {
                          sx: {
                            fontSize: "10px !important",
                            whiteSpace: "nowrap",
                          },
                        },
                      }}
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    />

                    {/* Align button to the left */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        mt: 1,
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          background:
                            "linear-gradient(to right, #CC0000, #FF6666)",
                          color: "white",
                          fontWeight: "bold",
                          padding: "12px",
                          width: "100%",
                          maxWidth: "180px",
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
        </Grid>
      </Box>
      {/* Footer Section */}
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#eef5fc",
          mt: 3,
        }}
      ></Box>
    </div>
  );
};

export default FormPage;
