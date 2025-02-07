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
import logo from "../../images/contactImg/maskgroup.png";
import img from "../../images/contactImg/Ellipse.png";
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "./ContactUs";

const positions = [
  "0% 0%",
  "50% 0%",
  "100% 0%",
  "0% 50%",
  "50% 50%",
  "100% 50%",
  "0% 100%",
  "50% 100%",
  "100% 100%",
];

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
          height: { xs: "auto", md: "82vh" },
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Left - Octagon Image Grid */}
        {/* <Box
          sx={{
            width: { xs: "100%", sm: "400px", md: "500px" },
            height: { xs: "250px", md: "300px" },
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "5px",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            overflow: "hidden",
          }}
        >
          {positions.map((pos, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "500px 300px",
                backgroundPosition: pos,
                width: "100%",
                height: "100%",
              }}
            />
          ))}
        </Box> */}

        {/* Right - Content Section */}
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "550px" },
            padding: { xs: 2, md: 4 },
            backgroundColor: "#D2EBFF",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            mt: { xs: 4, md: 0 },
            ml: { xs: 0, md: 6 },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#000"
            fontSize={{ xs: "h6", sm: "h5", md: "h4" }}
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
            bottom: "-76%",
            left: "31%",
            transform: "translateX(-50%)",
            width: "72px",
            height: "72px",
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
