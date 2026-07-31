import { Box } from '@mui/material';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 4,
        py: 2,
        height: 20,
        backgroundColor: '#fff',
        borderBottom: '1px solid #e5e7eb',
        justifyContent: 'center',
      }}
    >
      ClinicPro © {currentYear} — Todos os direitos reservados
    </Box>
  );
}
