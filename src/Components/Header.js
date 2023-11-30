import React from 'react';
import { Typography, Paper } from '@mui/material';

const Portfolio = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        My Portfolio
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
      </Paper>
    </div>
  );
};

export default Portfolio;