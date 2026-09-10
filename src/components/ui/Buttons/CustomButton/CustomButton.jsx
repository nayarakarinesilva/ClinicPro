import React from 'react';
import NextLink from 'next/link';
import { Button } from '@mui/material';

const CustomButton = ({
  onClick,
  children,
  type,
  href,
  background = 'primary.main',
  color = 'text.default',
}) => {
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
        fontSize: '15px',
        backgroundColor: background,
        color: color,
        textTransform: 'uppercase',
        borderRadius: '8px',
        mt: 1,
        mb: 1,
        minHeight: '40px',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
