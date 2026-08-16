import React from 'react';
import NextLink from 'next/link';
import { Button } from '@mui/material';

const CustomButton = ({ onClick, children, type, href }) => {
  return (
    <Button
      component={href ? NextLink : undefined}
      href={href}
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
