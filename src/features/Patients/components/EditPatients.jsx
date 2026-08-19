'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Paper, Stack, Typography, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from '@/ui/Buttons/LinkButton/LinkButton';
import Input from '@/ui/Input/Input';
import TextArea from '@/ui/TextArea/TextArea';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import OutlineButton from '@/ui/Buttons/OutlineButton/OutlineButton';
import { usePatients } from '../hooks/usePatients';
import { useParams } from 'next/navigation';
import { usePatientsStore } from '@/store/usePatientsStore/usePatientsStore';

const EditPatients = () => {
  const { register, handleSubmit, errors, handleEditPatient, reset } =
    usePatients();
  const patientsList = usePatientsStore((state) => state.patientsList);
  const initialized = useRef(false);
  const { id } = useParams();
  const patientId = Number(id);

  useEffect(() => {
    if (initialized.current) return;

    const patient = patientsList.find(
      (patient) => Number(patient.id) === patientId
    );

    if (patient) {
      reset(patient);
      initialized.current = true;
    }
  }, [patientId, patientsList, reset]);
  
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
              Novo Paciente
            </Typography>
            <Divider />
            <Stack
              component="form"
              noValidate
              onSubmit={handleSubmit((data) =>
                handleEditPatient(patientId, data)
              )}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                marginTop: '25px',
              }}
            >
              <Box>
                <Input
                  {...register('name', {
                    required: 'Nome é obrigatório',
                  })}
                  label="Nome completo *"
                  type="text"
                  fullWidth
                  placeholder={'Nome completo'}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Input
                  {...register('date_birth', {
                    required: 'Data de nascimento é obrigatório',
                  })}
                  label="Data de nascimento *"
                  type="date"
                  error={!!errors.date_birth}
                  helperText={errors.date_birth?.message}
                  fullWidth
                />
                <Input
                  {...register('document_cpf', {
                    required: 'CPF é obrigatório',
                  })}
                  label="CPF *"
                  type="number"
                  fullWidth
                  placeholder={'000.000.000-00'}
                  error={!!errors.document_cpf}
                  helperText={errors.document_cpf?.message}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Input
                  {...register('phone', {
                    required: 'Telefone é obrigatório',
                    pattern: {
                      value: /^(\(?\d{2}\)?\s?)?(9?\d{4}-?\d{4})$/,
                      message: 'Digite um telefone válido.',
                    },
                  })}
                  label="Telefone *"
                  type="number"
                  fullWidth
                  placeholder={'(00) 00000-0000'}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
                <Input
                  {...register('email')}
                  label="E-mail "
                  type="email"
                  fullWidth
                  placeholder={'exemplo@email.com'}
                />
              </Box>

              <TextArea
                {...register('text_notes')}
                label={'Observações'}
                type={'text'}
                placeholder={'Alergias, condições especiais, etc.'}
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
                <CustomButton type="submit">Cadastrar</CustomButton>
                <OutlineButton type="button">Cancelar</OutlineButton>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default EditPatients;
