import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ onClick, text, type }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
      fullWidth
      sx={{
        py: 1.2,
        fontWeight: 600,
        textTransform: 'none',
        background: '#004AC6',
        mt: 1,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
