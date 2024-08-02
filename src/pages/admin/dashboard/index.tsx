import { useState } from "react";
import Students from "../students";
import Teachers from "../teachers";
import TopStats from "../topStats";
import { Box, Button, Typography, Paper, Grid } from "@mui/material";

// const status = [
//   {
//     value: "today",
//     label: "Today",
//   },
//   {
//     value: "month",
//     label: "This Month",
//   },
//   {
//     value: "year",
//     label: "This Year",
//   },
// ];

const Dashboard = () => {
  const [slot, setSlot] = useState("week");

  return (
    <Box className="container mx-auto p-4">
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold">
          Dashboard
        </Typography>
      </Box>
      <TopStats />

      <Box mt={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h5" fontWeight="medium">
                Unique Visitor
              </Typography>
              <Box>
                <Button
                  variant={slot === "month" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setSlot("month")}
                >
                  Month
                </Button>
                <Button
                  variant={slot === "week" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setSlot("week")}
                  sx={{ ml: 2 }}
                >
                  Week
                </Button>
              </Box>
            </Box>
            <Paper elevation={3} sx={{ p: 2 }}>
              Chart
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mb={2}>
              <Typography variant="h5" fontWeight="medium">
                Income Overview
              </Typography>
            </Box>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box mb={2}>
                <Typography variant="h6" color="textSecondary">
                  This Week Statistics
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  $7,650
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box mt={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 7 }}>
              <Students />
              <Teachers />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mb={2}>
              <Typography variant="h5" fontWeight="medium">
                Analytics Report
              </Typography>
            </Box>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  borderBottom={1}
                  borderColor="divider"
                  pb={1}
                >
                  <Typography>Company Finance Growth</Typography>
                  <Typography color="success.main" fontWeight="medium">
                    +45.14%
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  borderBottom={1}
                  borderColor="divider"
                  pb={1}
                  mt={2}
                >
                  <Typography>Company Expenses Ratio</Typography>
                  <Typography color="textSecondary" fontWeight="medium">
                    0.58%
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography>Business Risk Cases</Typography>
                  <Typography color="error.main" fontWeight="medium">
                    Low
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
