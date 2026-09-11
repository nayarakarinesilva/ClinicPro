import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({ icon, bgColor, color, title, subtitle, value }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: '130px',
        display: 'flex',
        flexDirection: 'row',
        p: 2,
        gap: 3,
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
        <Typography
          sx={{
            textTransform: 'uppercase',
            color: 'text.muted',
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textTransform: 'uppercase',
            color: 'text.primary',
            fontWeight: 600,
            fontSize: '30px',
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontSize: '15px',
            color: 'text.muted',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default InfoCard;
