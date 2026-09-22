import React from 'react';
import { Button } from '@mui/material';

const OutlineButton = ({ children, onClick, type }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
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
        color: 'text.secondary',
        border:'1px solid',
        borderColor:'text.muted'
      }}
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
