import React from 'react';
import { Box, Typography } from '@mui/material';

const TitleForm = ({ title, subtitle }) => {
  return (
    <Box sx={{ textAlign: 'center'}}>
      <Typography sx={{ fontSize: '28px', fontWeight: 700, color: 'primary.main'  }}>
        {title}
      </Typography>
      <Typography sx={{ textAlign: 'center', mb: 2 }}>{subtitle} </Typography>
    </Box>
  );
};

export default TitleForm;
