import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Divider,
} from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../../images/Footer/Logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", height: "50%" }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(to left, #CC0000, #FFFFFF, #FFFFFF, #599ED4)",
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #CC0000, #599ED4)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
              mt: 2,
              fontFamily: "Inter",
            }}
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
          >
            Connect with Us
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Container Section */}
      <Container
        sx={{
          width: "100%",
          height: "96.3px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ fontFamily: "Inter" }}>
          <Grid container sx={{ padding: "20px 0", width: "100%" }}>
            {/* Left Section */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box className="footer-logo">
                  <img
                    src={Logo}
                    alt="Connect with Us"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </Box>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                  Be sure to take a look at our
                </Typography>
                <Link
                  href="#"
                  sx={{
                    color: "#CC0000",
                    textDecorationColor: "#CC0000",
                    fontWeight: "bold",
                    mt: 2,
                    alignContent: "center",
                  }}
                >
                  Terms of Use & Privacy <br /> Policy
                </Link>

                {/* Social Icons */}
                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                  <Box sx={{ mt: 3 }}>
                    <Typography>Follow us on socials</Typography>
                    <IconButton sx={{ color: "#CC0000" }}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#CC0000" }}>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#CC0000" }}>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#CC0000" }}>
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Middle Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Links
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <MuiLink
                    component={RouterLink}
                    to="/"
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mt: 3,
                    }}
                  >
                    Home
                  </MuiLink>
                  <MuiLink
                    component={RouterLink}
                    to="/about"
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mt: 3,
                    }}
                  >
                    About Us
                  </MuiLink>
                  <MuiLink
                    component={RouterLink}
                    to="/about"
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mt: 3,
                    }}
                  >
                    Services
                  </MuiLink>
                  <MuiLink
                    component={RouterLink}
                    to="/careers"
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mt: 3,
                    }}
                  >
                    Career
                  </MuiLink>
                </Grid>
                <Grid item xs={6}>
                  <MuiLink
                    component={RouterLink}
                    to="/case-studies"
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mt: 3,
                    }}
                  >
                    Case Study
                  </MuiLink>
                  <MuiLink
                    component={RouterLink}
                    to="/our-approach"
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mt: 3,
                    }}
                  >
                    Our Approach
                  </MuiLink>
                  <MuiLink
                    component={RouterLink}
                    to="/blogs"
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mt: 3,
                    }}
                  >
                    Blogs
                  </MuiLink>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Contact Us
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#CC0000" }}
              >
                Corp Office
              </Typography>
              <Typography variant="body2">
                <LocationOn fontSize="small" /> Floor 2, GST Grand, GST Road,
                Vandalur, Chennai - 600 048.
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#CC0000", mt: 2 }}
              >
                Dev Centre
              </Typography>
              <Typography variant="body2">
                <LocationOn fontSize="small" /> Veda, Plot No 128, Raju Nagar
                Main Road, Okkkiyam, Thoraipakkam, Chennai - 600097.
              </Typography>

              <Typography variant="body2" sx={{ mt: 2 }}>
                <Phone fontSize="small" /> +91 9003383659
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                <Email fontSize="small" /> solutions@compunet.in
              </Typography>
            </Grid>
          </Grid>

          {/* Divider Section */}
          <Box sx={{ my: 3 }}>
            <Divider
              sx={{
                width: "100%",
                height: "100%",
                align: "center",
                maxWidth: "1440px",
                position: "static",
              }}
            />
          </Box>

          {/* Footer Copyright */}
          <Box sx={{ mt: 3, mb: 3 }}>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: "12px", color: "#CC0000" }}
            >
              © Copyright by Compunet Connections – All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
