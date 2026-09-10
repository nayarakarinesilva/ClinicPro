import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const SidebarHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      <Image priority src="/logo.svg" alt="Logo" width={30} height={30} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          ClinicPro
        </Typography>
        <Typography
          sx={{
            textTransform: 'uppercase',
            color: 'text.disabled',
            fontSize: '0.7rem',
            fontWeight: 500,
          }}
        >
          Medical Management
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarHeader;
