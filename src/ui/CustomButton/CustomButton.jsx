import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ onClick, children, type }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
      fullWidth
      sx={{
        fontWeight: 600,
        fontSize: '16px',
        background: 'primary.main',
        textTransform: 'uppercase',
        borderRadius: '8px',
        mt: 1,
        mb: 1,
        minHeight: '45px',
        color: 'text.default',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
