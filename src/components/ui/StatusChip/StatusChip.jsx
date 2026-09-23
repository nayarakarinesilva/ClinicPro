import { Chip } from '@mui/material';
import React from 'react';

const statusConfig = {
  concluida: {
    label: 'Concluída',
    backgroundColor: 'success.light',
    color: 'success.main',
    fontWeight: 600,
  },
  confirmada: {
    label: 'Confirmada',
    backgroundColor: 'lilac.light',
    color: 'lilac.main',
    fontWeight: 600,
  },
  agendada: {
    label: 'Agendada',
    backgroundColor: 'background.primary',
    color: 'button.primary',
    fontWeight: 600,
  },
  cancelada: {
    label: 'Cancelada',
    backgroundColor: 'error.light',
    color: 'error.main',
    fontWeight: 600,
  },
};

const StatusChip = ({ status }) => {
  const config = statusConfig[status];
  return (
    <Chip
      label={config.label}
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.color,
        fontWeight: 600,
      }}
    />
  );
};

export default StatusChip;
