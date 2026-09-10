import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { useParams } from 'next/navigation';
import CustomTitle from '@/components/ui/CustomTitle/CustomTitle';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { formatCpf, getAvatarInitial } from '@/helpers/userHelper';
import { getBirth } from '@/helpers/dateHelper';
import CreateIcon from '@mui/icons-material/Create';
import Link from 'next/link';
import { usePatient } from '@/features/Patients/hooks/usePatient';

const PatientHeader = () => {
  const { id } = useParams();

  const patient = usePatient(id);

  const userName = patient?.name;
  const userNameAvatar = getAvatarInitial(userName);
  const userBirth = getBirth(patient?.date_birth);
  const userDocument = formatCpf(patient?.document_cpf);

  return (
    <Paper
      variant="outlined"
      sx={{
        width: '100%',
        height: 130,
        border: 'none',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        padding: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            padding: 1,
          }}
        >
          <Avatar
            sx={{
              width: 55,
              height: 55,
              borderRadius: 4,
              bgcolor: 'background.primary',
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            {userNameAvatar}
          </Avatar>
        </Box>
        <Box sx={{ p: 3 }}>
          <Box>
            <CustomTitle title={userName} />{' '}
          </Box>
          <Box>
            <Typography sx={{ color: 'text.muted' }}>
              Idade: {userBirth} anos
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: 'text.muted' }}>
              CPF: {userDocument}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 35,
          borderRadius: 2,
          bgcolor: 'background.primary',
          color: 'primary.main',
          gap: 1,
          mr: 10,
        }}
      >
        <CreateIcon />
        <Link
          href={`/pacientes/${patient?.id}/editar`}
          style={{ textDecoration: 'none', color: 'primary.main' }}
        >
          <Typography>Editar</Typography>
        </Link>
      </Box>
    </Paper>
  );
};

export default PatientHeader;
