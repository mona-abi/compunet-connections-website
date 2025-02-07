import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Chip,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LocationOn, Facebook, Twitter, Instagram, LinkedIn, Share as ShareIcon, Work as WorkIcon, CalendarToday as CalendarTodayIcon, SellOutlined as SellOutlinedIcon } from "@mui/icons-material";
import dollor from "../../images/careersimg/reupee.png";
import exp from "../../images/careersimg/exp.png";
import { useNavigate } from "react-router-dom";
const JobDetailsPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#eef5fc", minHeight: "100vh", py: 4 }}>
      <Container>
      <Box
  sx={{
    maxWidth: 1000,
    margin: "auto",
    height: "auto",
    border: "1px solid #CC0000",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    // p: isMobile ? 2 : 0,
    overflow: "hidden", 
  }}
>
  {/* Header Section */}
  <Box
    sx={{
      background: "linear-gradient(to left, #CC0000, #FFFFFF, #599ED4)",
      width: "100%",
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px 10px 0 0", // Match outer Box
    }}
  >
    <Typography
      variant={isMobile ? "h5" : "h4"}
      sx={{
        fontWeight: "bold",
        background: "linear-gradient(to right, #CC0000, #599ED4)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontFamily: "Inter",
      }}
    >
      Job Overview
    </Typography>
  </Box>



          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                {[
                  { icon: dollor, title: "Salary", value: "₹100000 - ₹150000 /year" },
                  { icon: <LocationOn fontSize="large" />, title: "Location", value: "Chennai" },
                  { icon: <WorkIcon fontSize="large" />, title: "Job Type", value: "Full-Time" },
                  { icon: <CalendarTodayIcon fontSize="large" />, title: "Date Posted", value: "9 Feb 2024" },
                  { icon: <SellOutlinedIcon fontSize="large" />, title: "Job Tags", value: ["Project Management", "HR", "Consulting"] },
                  { icon: exp, title: "Experience", value: "Fresher" },
                ].map((item, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <Box display="flex" alignItems="center">
                      {typeof item.icon === "string" ? (
                        <img src={item.icon} alt={item.title} style={{ width: 40, height: 40, marginRight: 10 }} />
                      ) : (
                        <Box sx={{ mr: 2 }}>{item.icon}</Box>
                      )}
                      <Box display="flex" flexDirection="column">
                        <Typography fontWeight="bold">{item.title}</Typography>
                        {Array.isArray(item.value) ? (
                          <Box>
                            {item.value.map((tag, idx) => (
                              <Chip key={idx} label={tag} sx={{ mr: 1, mb: 1 }} />
                            ))}
                          </Box>
                        ) : (
                          <Typography>{item.value}</Typography>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                ))}

                <Grid item xs={12} sm={6} md={4}>
                  <Box display="flex" alignItems="center">
                    <ShareIcon fontSize="large" sx={{ mr: 2 }} />
                    <Box>
                      <Typography fontWeight="bold">Share this job</Typography>
                      <Box display="flex" gap={1}>
                        {[
                          { Icon: Twitter, url: "https://twitter.com" },
                          { Icon: Instagram, url: "https://instagram.com" },
                          { Icon: LinkedIn, url: "https://linkedin.com" },
                          { Icon: Facebook, url: "https://facebook.com" },
                        ].map((social, index) => (
                          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                            <IconButton>
                              <Box
                                sx={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: "50%",
                                  backgroundColor: "#eef5fc",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <social.Icon sx={{ color: "#CC0000" }} />
                              </Box>
                            </IconButton>
                          </a>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        color="error"
        sx={{
          borderRadius: "5px",
          width: isMobile ? "100%" : "70%",
          textTransform: "none",
        }}
        onClick={() => navigate("/apply")} // Navigate to the form page
      >
        Apply Now
      </Button>
    </Grid>
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Job Description
          </Typography>
          <Typography paragraph sx={{ fontSize: "16px", lineHeight: "2.1", textAlign: "justify" }}>
            Currently, we have openings for MBA freshers who have the spark, confidence & zeal to learn something new every day.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Requirements
          </Typography>
          <Typography sx={{ fontSize: "15px", lineHeight: "1.8", textAlign: "justify" }}>
          <ul>
            <li>
               Educational Background: A bachelor's degree in business
              administration or related to the field is required. Preferably an
              MBA degree from a reputable institution.
            </li>
            <li>
              Technical Acumen: Basic understanding or exposure to IT concepts,
              tools & technologies is advantageous. This might include knowledge
              of programming languages, databases, project management
              methodologies, etc.
            </li>
            <li>
              Analytical Skills: Ability to analyze data, understand trends &
              make data-driven decisions. This could involve proficiency in
              tools like Excel, statistical analysis software or business
              intelligence platforms.
            </li>
            <li>
              Communication Skills: A Clear & effective communication (i.e.,)
              both verbal & written is crucial. This includes the ability to
              present ideas, write reports & communicate with team members &
              clients.
            </li>
            <li>
              Problem-Solving Ability: Demonstrated capability to identify
              issues, propose solutions & implement them effectively. This could
              be through case studies, projects or internships during the MBA
              program.
            </li>
            <li>
              Adaptability: The IT industry is dynamic & constantly evolving.
              The Candidates should show their flexibility & willingness to
              learn new technologies, methodologies & business processes.
            </li>
            <li>
              Teamwork & Collaboration: Capability to work effectively in the
              teams, collaborate with diverse stakeholders & contribute
              positively to team goals.
            </li>
            <li>
              Business Acumen: Understanding of business principles, market
              dynamics & industry trends. This could be assessed through
              coursework, internships or extracurricular activities during the
              MBA program.
            </li>
            <li>
              Leadership Potential: While they may not have any extensive
              leadership experience, the candidates should demonstrate
              leadership qualities such as initiative, accountability & the
              ability to influence others positively.
            </li>
            <li>
              Project Management Skills: Basic understanding of a project
              management concepts such as planning, organizing & executing
              projects within scope, budget & schedule constraints.
            </li>
            <li>
              Ethical Conduct: Adherence to ethical standards & professional
              conduct is essential. Candidates should demonstrate integrity & a
              commitment to upholding ethical principles in their work.
            </li>
          </ul>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default JobDetailsPage;
