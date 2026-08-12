import React from 'react';
import { Button } from '@mui/material';

const LinkButton = ({ icon: Icon, children, onClick }) => {
  return (
    <Button
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
