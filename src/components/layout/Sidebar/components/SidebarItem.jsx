import { Box, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SidebarItem = ({ icon: IconComponent, text, onClick, active }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0.5rem 1rem',
        gap: '0.7rem',
        mb: 1,

        minWidth: '223px',
        minHeight: '3rem',
        cursor: 'pointer',
        borderRadius: '0.5rem',
        color: active ? 'primary.main' : 'text.muted',

        borderLeft: '4px solid',
        borderLeftColor: active ? 'primary.main' : 'transparent',
        bgcolor: active ? 'background.primary' : 'transparent',

        '&:hover': {
          bgcolor: 'background.primary',
          // Bordinha azul
          borderLeft: '4px solid',
          borderLeftColor: 'primary.main',
        },
      }}
    >
      <IconComponent />
      <Typography sx={{ fontWeight: 500 }}>{text}</Typography>
      <Box sx={{ ml: 'auto' }}> {active && <KeyboardArrowRightIcon />}</Box>
    </Box>
  );
};

export default SidebarItem;
