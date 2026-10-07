import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({
  icon,
  bgColor,
  color,
  title,
  subtitle,
  value,
  height = '130px',
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: { xs: '100px', sm: height },
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
          width: { xs: '35px', sm: '40px', md: '45px' },
          height: { xs: '35px', sm: '40px', md: '45px' },
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
            fontSize: { sm: '0.875rem', md: '1rem' },
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
            fontSize: { sm: '1rem', md: '	1.125rem' },
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.75rem', lg: '1rem' },
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
