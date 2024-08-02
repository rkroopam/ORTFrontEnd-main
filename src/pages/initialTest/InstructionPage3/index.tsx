import React, { useState } from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InstructionsPage3 = ({ title }: any) => {
  const navigate = useNavigate();
  const [audio] = useState(new Audio("/path/to/audio/file.mp3"));

  const handlePlayAudio = () => {
    audio.play();
  };

  const handleNext = () => {
    navigate("/page5");
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3}>
        <Box p={4} mt={5}>
          <Typography variant="h5" align="center">
            {title}
          </Typography>
          <Box mt={3}>
            <Typography variant="body1">
              Make sure your device is not on mute.
            </Typography>
            <Typography variant="body1" mt={2}>
              Check to see if your headphones are connected.
            </Typography>
            <Typography variant="body1" mt={2}>
              Adjust app sound settings in your phone's settings menu.
            </Typography>
            <Typography variant="body1" mt={2}>
              Turn off 'Do Not Disturb' mode.
            </Typography>
            <Typography variant="body1" mt={2}>
              Reboot your device.
            </Typography>
          </Box>
          <Box mt={3} display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handlePlayAudio}
              style={{ marginBottom: "16px" }}
            >
              Tap to hear again
            </Button>
            <Button variant="contained" color="secondary" onClick={handleNext}>
              I hear it
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default InstructionsPage3;
