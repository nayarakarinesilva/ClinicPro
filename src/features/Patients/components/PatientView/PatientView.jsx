'use client';

import React from 'react';
import {
  Box,
  Paper,
  Stack,
  Typography,
  Avatar,
  Tabs,
  Tab,
} from '@mui/material';
import { useParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from '@/ui/Buttons/LinkButton/LinkButton';
import CustomTitle from '@/ui/CustomTitle/CustomTitle';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { formatCpf, getAvatarInitial } from '@/helpers/userHelper';
import { getBirth } from '@/helpers/dateHelper';
import CreateIcon from '@mui/icons-material/Create';

const PatientView = () => {
  const patientsList = usePatientsStore((state) => state.patientsList);

  const { id } = useParams();
  const patientId = Number(id);

  const patient = patientsList.find(
    (patient) => Number(patient.id) === patientId
  );

  const userName = patient?.name;

  const userNameAvatar = getAvatarInitial(userName);
  const userBirth = getBirth(patient?.date_birth);
  const userDocument = formatCpf(patient?.document_cpf);

  console.log('patient');

  return (
    <Box>
      <LinkButton href="/pacientes" icon={ArrowBackIcon}>
        Voltar para pacientes
      </LinkButton>
      <Stack
        sx={{
          pt: 2,
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            width: '100%',
            height: 130,
            borderColor: 'border.default',
            backgroundColor: 'background.default',
            borderRadius: 2,
            boxShadow: 'none',
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
            <Typography>Editar</Typography>
          </Box>
        </Paper>

        <Tabs
          // value={value}
          // onChange={handleChange}
          aria-label="abas do paciente"
          sx={{
            alignSelf: 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: 'row',
              backgroundColor: 'background.default',
              m: 2,
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 5,
                alignItems: 'center',
                padding: 1,
              }}
            >
              <Tab
                label="Informações"
                sx={{ backgroundColor: 'background.primary', borderRadius: 3 }}
              />

              <Tab label="Prontuário" />
            </Box>
          </Box>
        </Tabs>

        <Paper
          variant="outlined"
          sx={{
            width: '100%',
            height: 130,
            borderColor: 'border.default',
            backgroundColor: 'background.default',
            borderRadius: 2,
            boxShadow: 'none',
            padding: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Aqui dados
        </Paper>
      </Stack>
    </Box>
  );
};

export default PatientView;
