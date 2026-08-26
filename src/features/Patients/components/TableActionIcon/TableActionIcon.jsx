import React from 'react';
import { Box, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from 'next/link';

const TableActionIcon = ({ patient }) => {
  return (
    <>
      <Tooltip title="Visualizar paciente">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 1,
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'background.primary',
            },
          }}
        >
          <Link href={`/pacientes/${patient.id}/detalhes`}>
            <RemoveRedEyeIcon sx={{ color: 'primary.main' }} />
          </Link>
        </Box>
      </Tooltip>
      <Tooltip title="Editar paciente">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 1,
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'border.default',
            },
          }}
        >
          <Link href={`/pacientes/${patient.id}/editar`}>
            <EditIcon
              sx={{
                cursor: 'pointer',
                color: 'text.primary',
              }}
            />
          </Link>
        </Box>
      </Tooltip>
      <Tooltip title="Deletar paciente">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 1,
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'error.light',
            },
          }}
        >
          <DeleteIcon sx={{ color: 'error.main' }} />
        </Box>
      </Tooltip>
    </>
  );
};

export default TableActionIcon;
