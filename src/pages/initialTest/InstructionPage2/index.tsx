import React, { useState } from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

interface InstructionsPage2Props {
  title: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
}

const InstructionsPage2: React.FC<InstructionsPage2Props> = ({
  title,
  handleChange,
  formData,
}) => {
  const [audio] = useState(new Audio("/path/to/audio/file.mp3"));

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (handleChange) {
      handleChange({
        target: {
          name: "userCanHear",
          value: value === "hear" ? true : false,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };
  console.log(formData, "FormData");
  console.log(formData, "Form");
  const handlePlayAudio = () => {
    audio.play();
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
              Find a quiet place. A quiet room is best so you can focus on the
              sounds in the test.
            </Typography>
            <Typography variant="body1" mt={2}>
              Remove all distractions. No distractions means a more accurate
              final score!
            </Typography>
            <Typography variant="body1" mt={2}>
              Make sure the sound is on. Our test only works if you can hear all
              the sounds.
            </Typography>
            <Box mt={2} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handlePlayAudio}
              >
                Play sound to hear
              </Button>
            </Box>
          </Box>
          <Box mt={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Did you hear the instructions?
              </FormLabel>
              <RadioGroup
                row
                aria-label="hear"
                name="hear"
                onChange={handleOptionChange}
                // value={formData.userCanHear}
              >
                <FormControlLabel
                  value="hear"
                  control={<Radio />}
                  label="I hear it"
                />
                <FormControlLabel
                  value="dontHear"
                  control={<Radio />}
                  label="I don't hear it"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default InstructionsPage2;
