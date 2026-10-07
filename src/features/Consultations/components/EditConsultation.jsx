'use client';
import React, { useEffect, useRef } from 'react';
import {
  Autocomplete,
  TextField,
  Typography,
  Box,
  Paper,
  Stack,
  Divider,
  FormControl,
  NativeSelect,
} from '@mui/material';
import Input from '@/components/ui/Input/Input';
import OutlineButton from '@/components/ui/Buttons/OutlineButton/OutlineButton';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';
import LinkButton from '@/components/ui/Buttons/LinkButton/LinkButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextArea from '@/components/ui/TextArea/TextArea';
import CustomButton from '@/components/ui/Buttons/CustomButton/CustomButton';
import { useConsultations } from '../hooks/useConsultations';
import { useParams, useRouter } from 'next/navigation';

const EditConsultation = () => {
  const router = useRouter();

  const listPatients = usePatientsStore((state) => state.patientsList);
  const [value, setValue] = React.useState(null);
  const { id } = useParams();
  const consultationId = Number(id);

  const { handleEditConsultation, register, handleSubmit, reset, errors } =
    useConsultations();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    if (!consultationId) return;

    // Procura o paciente que possui a consulta que será editada
    const patient = listPatients.find((patient) =>
      patient.appointments?.some(
        // Verifica se o paciente possui uma consulta com o ID da URL
        (appointment) => Number(appointment.id) === consultationId
      )
    );

    if (!patient) return;

    // Define o paciente encontrado no Autocomplete
    setValue(patient);

    // Procura a consulta dentro do paciente encontrado
    const consultation = patient.appointments?.find(
      (appointment) => Number(appointment.id) === consultationId
    );

    if (!consultation) return;

    // Preenche o formulário com os dados da consulta
    if (patient) {
      reset(consultation);
      initialized.current = true;
    }
  }, [listPatients, consultationId, reset]);

  const handleSubmitEdit = (data) => {
    if (!value) return;

    handleEditConsultation(value.id, consultationId, data);
  };

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
              onSubmit={handleSubmit(handleSubmitEdit)}
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
                    color: 'text.main',
                    mb: 0.5,
                  }}
                >
                  Paciente
                  <Box component="span" sx={{ color: 'error.main' }}>
                    {' '}
                    *
                  </Box>
                </Typography>

                <Autocomplete
                  fullWidth
                  required
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
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Input
                  {...register('date', {
                    required: 'Data é obrigatório',
                  })}
                  label="Data"
                  type="date"
                  required
                  placeholder={'00/00/0000'}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                />
                <Input
                  {...register('time', {
                    required: 'Hora é obrigatória',
                  })}
                  label="Hora"
                  type="time"
                  required
                  error={!!errors.time}
                  helperText={errors.time?.message}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ width: '100%' }}>
                  <Input
                    {...register('procedure', {
                      required: 'Procedimento é obrigatório',
                    })}
                    label="Procedimento"
                    type="text"
                    required
                    placeholder={'Ex: consulta clínica geral'}
                    error={!!errors.procedure}
                    helperText={errors.procedure?.message}
                  />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <FormControl fullWidth>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'text.main',
                        mb: 0.5,
                      }}
                    >
                      Status
                      <Box component="span" sx={{ color: 'error.main' }}>
                        {' '}
                        *
                      </Box>
                    </Typography>
                    <NativeSelect
                      {...register('status', {
                        required: 'Status é obrigatório',
                      })}
                      error={!!errors.status}
                    >
                      <option value="agendada">Agendada</option>
                      <option value="confirmada">Confirmada</option>
                      <option value="concluida">Concluída</option>
                      <option value="cancelada">Cancelada</option>
                    </NativeSelect>
                  </FormControl>
                  {errors.status && (
                    <Typography
                      sx={{
                        color: 'error.main',
                        fontSize: '12px',
                        mt: 0.5,
                      }}
                    >
                      {errors.status.message}
                    </Typography>
                  )}
                </Box>
              </Box>
              <TextArea
                {...register('observations')}
                label={'Observações'}
                type={'text'}
                placeholder={'Anotações clínicas...'}
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
                <CustomButton type="submit">Salvar</CustomButton>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default EditConsultation;
