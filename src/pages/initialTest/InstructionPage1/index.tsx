import React from "react";
import { Container, Typography, Box } from "@mui/material";

const InstructionPage1: React.FC = ({ title }: any) => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          Measure your reading accuracy by matching sounds to the correct letter
          combinations
        </Typography>
        <Typography variant="body1" paragraph>
          On average, the test will take about 15 minutes
        </Typography>

        <Typography variant="body1" paragraph>
          When the test is complete, you will be shown your result and possible
          next steps.
        </Typography>

        <Typography variant="body2" color="textSecondary" mt={2}>
          Disclaimer: This test is not a formal diagnosis of dyslexia or any
          other reading disorder. It is intended to give an approximation of the
          test takers decoding abilities and offer solutions for improvement.
        </Typography>
      </Box>
    </Container>
  );
};

export default InstructionPage1;
