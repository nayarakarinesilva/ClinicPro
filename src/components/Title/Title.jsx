import React from 'react';
import { Typography, Box } from '@mui/material';

const Title = ({ children }) => {
  return (
    <Box sx={{ padding: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: 500, color: 'primary.main' }}>
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
