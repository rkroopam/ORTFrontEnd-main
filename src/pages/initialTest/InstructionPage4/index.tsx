import React from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OfferPracticeTestPage = () => {
  const navigate = useNavigate();

  const handlePracticeTestClick = () => {
    navigate("/page5.1");
  };

  const handleFullTestClick = () => {
    navigate("/page6");
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3}>
        <Box p={4} mt={5}>
          <Typography variant="h5" align="center">
            You're ready to start!
          </Typography>
          <Box mt={3}>
            <Typography variant="body1">
              If you're a little nervous, you can take a mini practice test to
              prepare.
            </Typography>
          </Box>
          <Box mt={3} display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              onClick={handlePracticeTestClick}
            >
              Take practice test
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleFullTestClick}
            >
              Skip forward to the full test
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default OfferPracticeTestPage;
