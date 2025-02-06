import React from "react";
import GetToKnow from "./GetToKnow";
import LeadershipTeam from "./LeaderShipTeam";
import { Box } from "@mui/material";
import Milestone from "./Milestone";
import Meet from "./Meet";
import ClientPartners from "./ClientPartners";

const About = () => {
  return (
    <Box>
   <GetToKnow />
   <LeadershipTeam />
   <Milestone />
   <Meet />
   <ClientPartners />
   </Box>
  );
};

export default About; 
