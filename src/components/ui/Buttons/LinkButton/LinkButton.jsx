import React from 'react';
import { Button } from '@mui/material';
import NextLink from 'next/link';

const LinkButton = ({ icon: Icon, children, onClick, href }) => {
  return (
    <Button
      component={href ? NextLink : undefined}
      href={href}
      variant="text"
      onClick={onClick}
      sx={{ fontSize: 14, textTransform: 'none', color: 'text.main' }}
    >
      <Icon />
      {children}
    </Button>
  );
};

export default LinkButton;
