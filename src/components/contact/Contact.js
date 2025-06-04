import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import bg from "../../images/contactImg/contactbg.png";
import logo from "../../images/contactImg/Maskgroup.png";
import img from "../../images/contactImg/Ellipse.png";
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "./ContactUs";

const Contact = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: "auto", md: "92vh" },
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          gap: { xs: 4, md: 8 },
          // p: { xs: 2, sm: 4 },
        }}
      >
        {/* Left - Image Section */}
        <Box
          sx={{
            width: { xs: "100%", sm: "400px", md: "600px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="Contact Us"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </Box>

        {/* Right - Content Section */}
        <Paper
          sx={{
            width: { xs: "100%", sm: "90%", md: "500px" },
            height: { xs: "auto", md: "270px" },
            padding: { xs: 2, md: 4 },
            backgroundColor: "#D2EBFF",
            ml: { md: -11 },
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#000"
            fontSize={{ xs: "h6", sm: "h5", md: "h4" }}
            sx={{ mb: 2 }}
          >
            Take on any Challenge of the <br /> Digital Transformation
          </Typography>
          <List>
            {[
              "Provide the right solutions to our clients",
              "Succeed by delivering effective, reliable & scalable solutions",
              "Provide world-class software services",
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#000" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      {/* Half-Circle Divider */}
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#eef5fc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "36px", md: "72px" },
            height: { xs: "36px", md: "72px" },
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
          }}
        />
      </Box>

      {/* Additional Sections */}
      <WhyChooseUs />
      <ContactUs />
    </Box>
  );
};

export default Contact;
