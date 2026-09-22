import React from 'react';
import { Box, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from 'next/link';

const TableAction = ({ viewHref, editHref, deleteHref }) => {
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
              backgroundColor: 'border.default',
            },
          }}
        >
          <Link href={viewHref}>
            <RemoveRedEyeIcon sx={{ color: 'text.muted' }} />
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
          <Link href={editHref}>
            <EditIcon
              sx={{
                cursor: 'pointer',
                color: 'text.muted',
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
              backgroundColor: 'border.default',
            },
          }}
        >
          <Link href={deleteHref}>
            <DeleteIcon sx={{ color: 'text.muted' }} />
          </Link>
        </Box>
      </Tooltip>
    </>
  );
};

export default TableAction;
