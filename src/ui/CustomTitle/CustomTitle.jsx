import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomTitle = ({ title }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        sx={{ fontSize: '22px', fontWeight: 700, color: 'text.primary' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CustomTitle;
