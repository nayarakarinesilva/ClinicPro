import React from 'react';
import { Box, Modal, Typography } from '@mui/material';

const CustomModal = ({ open, onClose, title, description, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 500,
          backgroundColor: '#ffffff',
          padding: 5,
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: 'text.secondary', fontWeight: 600 }}
        >
          {title}
        </Typography>

        <Typography>{description}</Typography>

        <Box
          sx={{
            width: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
