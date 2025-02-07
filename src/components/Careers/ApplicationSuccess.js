import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const ApplicationSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          textAlign: "center",
          p: 4,
          mt: 5,
          backgroundColor: "#E8F1FC",
          borderRadius: "12px",
        }}
      >
        <Box
          component="img"
          src="https://cdn-icons-png.flaticon.com/512/2942/2942836.png"
          alt="Success"
          sx={{ width: "200px", mb: 2 }}
        />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Your Application Has Been
          <Typography component="span" sx={{ color: "green", fontWeight: "bold" }}>
            {" "}
            Submitted!
          </Typography>
        </Typography>

        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
          You will get an email confirmation at <strong> emmastone@gmail.com</strong>
        </Typography>

        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
          <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
          This employer typically responds to applications within 1 day.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Keep track of your applications
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          You will receive a status update via email from Compunet Connections within a few weeks.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3b82f6",
            color: "#fff",
            "&:hover": { backgroundColor: "#2563eb" },
            borderRadius: "8px",
          }}
          onClick={() => navigate("/jobs")}
        >
          Return to job openings
        </Button>
      </Paper>
    </Container>
  );
};

export default ApplicationSuccess;
