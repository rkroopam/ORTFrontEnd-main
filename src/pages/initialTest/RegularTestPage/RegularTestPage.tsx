import React from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegularTestPage = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/test-question/1"); // Redirects to the first question of the regular test
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3}>
        <Box p={4} mt={5}>
          <Typography variant="h5" align="center">
            You're ready to start the regular test!
          </Typography>
          <Box mt={3}>
            <Typography variant="body1" align="center">
              The regular test consists of several questions designed to assess
              your reading skills.
            </Typography>
            <Typography variant="body1" align="center" mt={2}>
              Please follow the instructions and answer each question to the
              best of your ability.
            </Typography>
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartTest}
            >
              Start the Test
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegularTestPage;
