import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import success from '../../images/careersimg/submitted.png';

const ApplicationSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#E8F1FC", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0, 
      }}
    >
      <Paper
        elevation={3}
        sx={{
          textAlign: "center",
          p: 4,
          mt: 5,
          backgroundColor: "#E8F1FC",
          borderRadius: "12px",
          boxShadow: "none",
        }}
      >
        <Box
          component="img"
          src={success}
          alt="Success"
          sx={{ width: "600px", mb: 2, height: "328px" }}
        />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Your Application Has Been
        </Typography>
        <Typography component="span" sx={{ color: "green", fontWeight: "bold", fontSize: "35px" }}>
          Submitted!
        </Typography>

        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
          You will get an email confirmation at  emmastone@gmail.com
        </Typography>

        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
          <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
          This employer typically responds to applications within 1 day.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Keep track of your applications
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
        You will receive a status update in an email from Compunet Connections <br></br>within a few weeks of submitting your application.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#599ED4",
              color: "white",
              fontWeight: "bold",
              padding: "12px",
              width: "500px",
              height: "50px",
              textTransform: "none !important",
              fontSize: "15px",
              borderRadius: "30px",
            }}
            onClick={() => navigate("/careers")}
          >
            Return to job openings
          </Button>
        </Box>
        
      </Paper>
    </Container>
  );
};

export default ApplicationSuccess;
