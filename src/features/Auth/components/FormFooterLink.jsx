import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const FormFooterLink = ({ text, textLink, href }) => {
  return (
    <Box
      mt={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography color="text.secondary">{text}</Typography>
      <Link
        href={href}
        style={{
          color: 'primary.main',
          fontWeight: 500,
          textDecoration: 'underline',
        }}
      >
        {textLink}
      </Link>
    </Box>
  );
};

export default FormFooterLink;
