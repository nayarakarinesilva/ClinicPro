'use client';

import React from 'react';
import { Box, Stack } from '@mui/material';
import { useRegister } from './hooks/useRegister';
import Input from '@/ui/Input/Input';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import HeaderForm from '../components/HeaderForm/HeaderForm';
import FormFooterLink from '../components/FormFooterLink/FormFooterLink';

export default function RegisterForm() {
  const { register, handleSubmit, handleRegister, errors } = useRegister();

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        color: '#333',
      }}
    >
      <Box
        sx={{
          height: '550px',
          width: '100%',
          maxWidth: 480,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          padding: '40px',
        }}
      >
        <HeaderForm
          title="Criar conta"
          subtitle="Preencha os dados para criar sua conta."
        />

        <Stack
          component="form"
          noValidate
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
          onSubmit={handleSubmit(handleRegister)}
        >
          <Input
            {...register('name', {
              required: 'Nome é obrigatório',
            })}
            label="Nome"
            type="text"
            placeholder={'Nome'}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <Input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Digite um e-mail válido',
              },
            })}
            label="E-mail"
            type="email"
            placeholder={'E-mail'}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Input
            {...register('confirmEmail', {
              required: 'Confirmação do e-mail é obrigatória',
            })}
            label="Confirmar e-mail"
            type="email"
            placeholder={'Cofirme e-mail'}
            error={!!errors.confirmEmail}
            helperText={errors.confirmEmail?.message}
          />
          <Input
            {...register('password', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter no mínimo 6 caracteres',
              },
            })}
            label="Senha"
            type="password"
            placeholder="Senha"
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <CustomButton type="submit">Cadastrar</CustomButton>
          </Box>
          <FormFooterLink
            href={'/login'}
            text="Já tem uma conta?"
            textLink="Entrar no sistema"
          />
        </Stack>
      </Box>
    </Box>
  );
}
