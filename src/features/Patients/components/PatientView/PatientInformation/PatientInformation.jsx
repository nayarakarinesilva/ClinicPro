import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { useParams } from 'next/navigation';
import { usePatient } from '@/features/Patients/hooks/usePatient';
import { formatedDate, getBirth } from '@/helpers/dateHelper';
import { formatCpf, formatPhone } from '@/helpers/userHelper';

const PatientInformation = () => {
  const { id } = useParams();
  const patient = usePatient(id);

  const formatedDateBirth = formatedDate(patient?.date_birth);
  const formattedCpf = formatCpf(patient?.document_cpf);
  const formattedPhone = formatPhone(patient?.phone);
  const age = getBirth(patient?.date_birth);

  const leftInformation = [
    { label: 'Nome Completo', value: patient?.name },
    { label: 'Idade', value: `${age} anos` },
    { label: 'E-mail', value: patient?.email },
    { label: 'Observações', value: patient?.text_notes },
  ];

  const rigthInformation = [
    { label: 'Data de Nascimento', value: formatedDateBirth },
    { label: 'Telefone', value: formattedPhone },
    { label: 'CPF', value: formattedCpf },
  ];

  return (
    <Paper
      variant="outlined"
      sx={{
        width: '100%',
        height: '100%',
        border: 'none',
        backgroundColor: 'background.default',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        padding: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Grid size={6}>
            {leftInformation.map((item) => (
              <Box key={item.label} sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: 14,
                    color: 'text.muted',
                  }}
                >
                  {item.label}
                </Typography>
                <Typography>{item.value}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid size={6}>
            {rigthInformation.map((item) => (
              <Box key={item.label} sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: 14,
                    color: 'text.muted',
                  }}
                >
                  {item.label}
                </Typography>
                <Typography>{item.value}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PatientInformation;
