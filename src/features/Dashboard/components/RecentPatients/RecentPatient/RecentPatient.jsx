import React from 'react';
import { Box, Typography, Divider, Avatar } from '@mui/material';
import { formatPhone, getAvatarInitial } from '@/helpers/userHelper';
import Link from 'next/link';

const RecentPatient = ({ patient }) => {
  const userNameAvatar = getAvatarInitial(patient?.name);
  const formatedPhone = formatPhone(patient.phone);
  const formatedDate = new Date(patient.createdAt).toLocaleDateString('pt-BR');

  return (
    <Box>
      <Box
        component={Link}
        href={`/pacientes/${patient.id}/detalhes`}
        sx={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: 'background.primary',
                color: 'primary.main',
              }}
            >
              {userNameAvatar}
            </Avatar>

            <Box>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                {patient.name}
              </Typography>
              <Typography sx={{ color: 'text.muted', fontSize: '14px' }}>
                {formatedPhone}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ color: 'text.muted', fontSize: '14px' }}>
              {formatedDate}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider />
    </Box>
  );
};

export default RecentPatient;
