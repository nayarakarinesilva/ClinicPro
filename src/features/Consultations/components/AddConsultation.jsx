'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import TextArea from '@/components/ui/TextArea/TextArea';
import {
  Autocomplete,
  TextField,
  Typography,
  Box,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import Input from '@/components/ui/Input/Input';
import OutlineButton from '@/components/ui/Buttons/OutlineButton/OutlineButton';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import { useAddConsultation } from '../hooks/useAddConsultation';
import LinkButton from '@/components/ui/Buttons/LinkButton/LinkButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddConsultation = () => {
  // estado da opção selecionada no Autocomplete
  const [value, setValue] = React.useState(null);
  const router = useRouter();

  const listPatients = usePatientsStore((state) => state.patientsList);
  console.log('listPatients', listPatients);

  const { handleAddConsultation, register, handleSubmit, errors } =
    useAddConsultation({ patientId: value?.id });

  const handleClose = () => {
    router.push('/consulta');
  };

  return (
    <Box>
      <LinkButton href="/consulta" icon={ArrowBackIcon}>
        Voltar para consultas
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
            height: 600,
            borderColor: 'border.default',
            backgroundColor: 'background.default',
            borderRadius: 2,
            boxShadow: 'none',
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ color: 'text.secondary', fontWeight: 600 }}
            >
              Agendar nova consulta
            </Typography>
            <Divider />
            <Stack
              component="form"
              noValidate
              onSubmit={handleSubmit(handleAddConsultation)}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                marginTop: '25px',
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 0.5,
                  }}
                >
                  Paciente
                  <Box component="span" sx={{ color: 'error.main' }}>
                    *
                  </Box>
                </Typography>

                <Autocomplete
                  fullWidth
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  options={listPatients}
                  getOptionLabel={(patient) => patient.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Selecione um paciente"
                      size="small"
                    />
                  )}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Input
                  {...register('date', {
                    required: 'Data é obrigatório',
                  })}
                  label="Data"
                  type="date"
                  required
                  placeholder={'00/00/0000'}
                />
                <Input
                  {...register('time', {
                    required: 'Hora é obrigatória',
                  })}
                  label="Hora"
                  type="time"
                  required
                />
              </Box>
              <Input
                {...register('procedure', {
                  required: 'Procedimento é obrigatório',
                })}
                label="Procedimento"
                type="text"
                required
                placeholder={'Ex: consulta clínica geral'}
              />

              <TextArea
                {...register('observations')}
                label={'Observações'}
                type={'text'}
                placeholder={'Anotações clínicas...'}
                // error={!!errors.observations}
                // helperText={errors.observations?.message}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '60%',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              >
                <OutlineButton type="button" onClick={handleClose}>
                  Cancelar
                </OutlineButton>
                <CustomButton type="submit">Cadastrar</CustomButton>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default AddConsultation;
