import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({ icon, bgColor, color }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: '150px',
        display: 'flex',
        flexDirection: 'row',
        p: 2,
        gap: 2,
        borderColor: 'border.default',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          backgroundColor: bgColor,
          color: color,
          width: '45px',
          height: '45px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography>Titulo</Typography>
        <Typography>5</Typography>
        <Typography>Subtitulo</Typography>
      </Box>
    </Paper>
  );
};

export default InfoCard;
