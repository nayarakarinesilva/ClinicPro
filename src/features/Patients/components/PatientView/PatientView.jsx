'use client';

import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from '@/components/ui/Buttons/LinkButton/LinkButton';
import PatientViewTabs from './PatientViewTabs/PatientViewTabs';
import PatientInformation from './PatientInformation/PatientInformation';
import PatientRecord from './PatientRecord/PatientRecord';
import PatientHeader from './PatientHeader/PatientHeader';

const PatientView = () => {
  const [value, setValue] = useState(0);

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
        <PatientHeader />

        <PatientViewTabs value={value} setValue={setValue} />

        {value === 0 && <PatientInformation />}
        {value === 1 && <PatientRecord />}
      </Stack>
    </Box>
  );
};

export default PatientView;
