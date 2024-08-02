import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChange = (event: any) => {
    setSelectedPlan(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedPlan) {
      // Proceed with payment processing or next steps
      alert(`Selected plan: ${selectedPlan}`);
    } else {
      alert("Please select a plan");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Choose Your Payment Plan
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Payment Options</FormLabel>
        <RadioGroup value={selectedPlan} onChange={handleChange}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Silver Plan</Typography>
                <Typography variant="body1">1 Month - $10</Typography>
                <Typography variant="body1">3 Months - $25</Typography>
                <FormControlLabel
                  value="silver"
                  control={<Radio />}
                  label="Select Silver Plan"
                />
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Gold Plan</Typography>
                <Typography variant="body1">1 Month - $20</Typography>
                <Typography variant="body1">3 Months - $50</Typography>
                <FormControlLabel
                  value="gold"
                  control={<Radio />}
                  label="Select Gold Plan"
                />
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Diamond Plan</Typography>
                <Typography variant="body1">1 Month - $30</Typography>
                <Typography variant="body1">3 Months - $70</Typography>
                <FormControlLabel
                  value="diamond"
                  control={<Radio />}
                  label="Select Diamond Plan"
                />
              </CardContent>
            </Card>
          </Box>
        </RadioGroup>
      </FormControl>

      <Box sx={{ display: "flex", justifyContent: "flex-end", paddingTop: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Proceed to Payment
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentPage;
