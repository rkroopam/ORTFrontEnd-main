import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const TopStats = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="medium">Total Page Views</Typography>
            <Typography variant="h4" fontWeight="bold">4,42,236</Typography>
            <Typography color="success.main">+59.3%</Typography>
            <Typography color="textSecondary">35,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="medium">Total Students</Typography>
            <Typography variant="h4" fontWeight="bold">78,250</Typography>
            <Typography color="success.main">+70.5%</Typography>
            <Typography color="textSecondary">8,900</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="medium">Total Teachers</Typography>
            <Typography variant="h4" fontWeight="bold">18,800</Typography>
            <Typography color="error.main">-27.4%</Typography>
            <Typography color="textSecondary">1,943</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="medium">Total Sales</Typography>
            <Typography variant="h4" fontWeight="bold">$35,078</Typography>
            <Typography color="error.main">-27.4%</Typography>
            <Typography color="textSecondary">$20,395</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopStats;
