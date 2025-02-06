import React from "react";
import { Card, CardContent, Typography, Box,  Divider } from "@mui/material";
import Group1 from "../../images/aboutimg/Group1.png";
import Group2 from "../../images/aboutimg/Group2.png";
import Group3 from "../../images/aboutimg/Group3.png";
import Group4 from "../../images/aboutimg/Group4.png";
import Group5 from "../../images/aboutimg/Group5.png";
import Group6 from "../../images/aboutimg/Group6.png";
import Group7 from "../../images/aboutimg/Group7.png";

const teamMembers = [
  {
    name: "KAVITHA V B",
    role: "CEO",
    image: Group1,
    description: "Finance Professional with around two decades of experience in handling customers across the globe."
    
  },
  {
    name: "VENKY",
    role: "CVO",
    image: Group2,
    description: "A Tech & HR professional with nearly 30 years of experience in conceptualizing complex technical solutions & managing people.",
   },
  {
    name: "RANJITH",
    role: "DELIVERY",
    image: Group3,
    description: "Driving complex initiatives with strategic leadership, resource management, collaboration & organizational alignment.",
    
  },
  {
    name: "SWAMI",
    role: "DATA SERVICES",
    image: Group4 ,
    description: "Data Professional with expertise in setting up Data Warehouse, Data Lakes, Data Transformation & other technologies related to Data Analytics.",
    
  },
  {
    name: "ATHREYAN",
    role: "TECHNOLOGY",
    image: Group5 ,
    description: "Tech lead proficient in web technologies like (PHP, ReactJs, NodeJs, JavaScript), Frameworks (Ionic, Bootstrap, Laravel, Slim, CodeIgniter, Express) & Databases (MSSQL, MySQL, MongoDB).",
   
  },
  {
    name: "RATHINAM",
    role: "TECHNOLOGY",
    image: Group6 ,
    description: "Tech lead specializing in web technologies like (PHP,React, Node, Python), Databases (MySQL, MongoDB),leading projects with Docker, Jenkins & GIT with full-stack-developer skills to deliver exceptional results",
    
  },
  {
    name: "LAKSHMI NARAYANAN",
    role: "TECHNOLOGY",
    image: Group7 ,
    description: "Tech Ninja with  expertise in React, JavaScript, AJAX,jQuery & React Native passionately driving innovationin web & mobile app development.",
    
  },
];

const LeadershipTeam = () => {
  return (
    <Box sx={{ padding: "40px", maxWidth: "900px", margin: "auto",mb:2 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#d32f2f", fontWeight: "bold" }}>
        OUR <span style={{ color: "#1976d2" }}>LEADERSHIP TEAM</span>
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Our biggest asset is our team and its the Being Connector attitude that makes this <br></br> team deliver the best to the customer.
      </Typography>

      {teamMembers.map((member, index) => (
  <Box
    key={index}
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      marginBottom: "50px",
    }}
  >
    {/* Image Positioned Over the Left Edge */}
    <Box
      sx={{
        position: "absolute",
        left: "-60px", // Moves image partially outside
        top: "20%",
        transform: "translateY(-50%)",
        width: 120,
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </Box>

    {/* Card with Name, Position, and Description */}
    <Card
      sx={{
        flex: 1,
        padding: "20px",
        paddingLeft: "80px", // Creates space for image
        borderRadius: "10px",
        backgroundColor: "#E8F5FF",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Name & Role */}
      <Box sx={{ minWidth: "200px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#d32f2f" }}>
          {member.name}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "black" }}>
          {member.role}
        </Typography>
      </Box>

      {/* Divider */}
      <Divider orientation="vertical" flexItem sx={{ height: "60px", marginX: "15px" }} />

      {/* Description */}
      <CardContent>
        <Typography variant="body2">{member.description}</Typography>
      </CardContent>
    </Card>
  </Box>
))}

    </Box>
  );
};

export default LeadershipTeam;
