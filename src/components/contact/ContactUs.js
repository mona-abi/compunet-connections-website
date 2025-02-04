import React from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Typography,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LocationOn,
  Email,
  Phone,
  Person,
  CalendarToday,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import bg from "../../images/contactImg/Rectangle.png";
import { Formik } from "formik";
import * as Yup from "yup";
import MapPage from "./MapPage";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    date: Yup.string().required("Select a date"),
    message: Yup.string().required("Message cannot be empty"),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "75vh",
        p: isMobile ? 2 : 0,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
          width: "100%",

          height: { xs: "auto", md: 600 },
        }}
      >
        {/* Left Section (Contact Info) */}
        <Box
          sx={{
            flex: 1,
            borderRadius: { xs: "0 20px 20px 0", md: "0 20px 20px 0" },
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "100%", md: 700 },
            color: "#000",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            fontSize={{ xs: "24px", md: "30px" }}
          >
            CONTACT US
          </Typography>
          <Typography
            variant="body2"
            textAlign="center"
            fontSize={{ xs: "14px", md: "15px" }}
            sx={{ mb: 3 }}
          >
            We're here to help you every step of the way
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                icon: <LocationOn sx={{ color: "#CC0000", fontSize: 24 }} />,
                title: "Corporate",
                content:
                  "Floor 2, GST Grand,\n GST Road, Vandalur,\n Chennai - 600 048.",
              },
              {
                icon: <LocationOn sx={{ color: "#CC0000", fontSize: 24 }} />,
                title: "Dev Centre",
                content:
                  " Veda, Plot No 128, Raju\n Nagar Main Road,\n Okkiyam, Thoraipakkam,\n Chennai - 600 097.",
              },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontSize={{ xs: "18px", md: "20px" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={{ xs: "14px", md: "15px" }}
                >
                  {item.content.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
            {[
              {
                icon: <Phone sx={{ color: "#CC0000", fontSize: 24 }} />,
                title: "Phone",
                content: "+91 9003383659",
              },
              {
                icon: <Email sx={{ color: "#CC0000", fontSize: 24 }} />,
                title: "Email",
                content: "solutions@compunet.in",
              },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "14px", md: "15px" } }}
                >
                  {item.content}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 3, width: "100%" }}>
            <Typography variant="h6" fontWeight="bold" textAlign="center">
              Follow us on socials
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} mt={2}>
              {[
                { Icon: Twitter, url: "https://twitter.com" },
                { Icon: Instagram, url: "https://instagram.com" },
                { Icon: LinkedIn, url: "https://linkedin.com" },
                { Icon: Facebook, url: "https://facebook.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton sx={{ p: 0 }}>
                    <Box
                      sx={{
                        width: { xs: 35, md: 40 },
                        height: { xs: 35, md: 40 },
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <social.Icon
                        sx={{ color: "#CC0000", fontSize: { xs: 20, md: 24 } }}
                      />
                    </Box>
                  </IconButton>
                </a>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right Section (Form) */}
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
                <Typography variant="h5" fontWeight="bold" fontSize="30px">
                  Let's Get in Touch
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, fontSize: "16px" }}>
                  Your next step starts here
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
                  <Grid item xs={6}>
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
                  <Grid item xs={6}>
                    <Typography sx={{ fontWeight: "bold" }}>Date</Typography>
                    <TextField
                      fullWidth
                      type="date"
                      name="date"
                      placeholder="Select date"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.date && !!errors.date}
                      helperText={touched.date && errors.date}
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
                            <CalendarToday sx={{ color: "black" }} />
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
                  placeholder="Write Message..."
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
                    Send Message
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Paper>
      <>
        <MapPage />
      </>
    </Box>
  );
};

export default ContactUs;
