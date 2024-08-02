import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Paper, Box, Typography } from "@mui/material";

const FirstMainPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup/page1");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Box p={4} mt={5} textAlign="center">
          <Typography variant="h5">Signup</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignup}
            fullWidth
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/login")}
            fullWidth
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default FirstMainPage;
