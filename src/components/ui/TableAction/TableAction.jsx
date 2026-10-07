import React from 'react';
import { Box, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from 'next/link';

const TableAction = ({ viewHref, editHref, deleteHref }) => {
  return (
    <>
      {viewHref && (
        <Tooltip title="Visualizar">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 1,
              borderRadius: '50%',
              cursor: 'pointer',
              backgroundColor: 'lilac.light',
              width: 35,
              height: 35,
            }}
          >
            <Link
              href={viewHref}
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <RemoveRedEyeIcon sx={{ color: 'lilac.main' }} />
            </Link>
          </Box>
        </Tooltip>
      )}
      <Tooltip title="Editar">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 1,
            borderRadius: '50%',
            cursor: 'pointer',
            backgroundColor: 'background.primary',
            width: 35,
            height: 35,
          }}
        >
          <Link
            href={editHref}
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EditIcon
              sx={{
                cursor: 'pointer',
                color: 'button.primary',
              }}
            />
          </Link>
        </Box>
      </Tooltip>
      {deleteHref && (
        <Tooltip title="Deletar">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 1,
              borderRadius: '50%',
              cursor: 'pointer',
              backgroundColor: 'error.light',
              width: 35,
              height: 35,
            }}
          >
            <Link
              href={deleteHref}
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DeleteIcon fontSize="medium" sx={{ color: 'error.main' }} />
            </Link>
          </Box>
        </Tooltip>
      )}
    </>
  );
};

export default TableAction;
