import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderForm = ({ title, subtitle }) => {
  return (
    <Box sx={{ textAlign: 'center', color: 'text.secondary' }}>
      <Typography sx={{ fontSize: '28px', fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography sx={{ textAlign: 'center', mb: 2 }}>{subtitle} </Typography>
    </Box>
  );
};

export default HeaderForm;
