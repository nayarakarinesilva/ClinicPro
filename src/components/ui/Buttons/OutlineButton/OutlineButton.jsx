import React from 'react';
import { Button } from '@mui/material';

const OutlineButton = ({ children, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
    //   type={type}
      fullWidth
      sx={{
        fontWeight: 600,
        fontSize: '16px',
        backgroundColor: 'background.default',
        textTransform: 'uppercase',
        borderRadius: '8px',
        mt: 1,
        mb: 1,
        minHeight: '45px',
        color: 'primary.main',
        border:'2px solid',
        borderColor:'primary.main'
      }}
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
