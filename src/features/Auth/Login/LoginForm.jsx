'use client';

import React from 'react';
import { Box, Stack } from '@mui/material';
import Input from '@/ui/Input/Input';
import CustomButton from '@/ui/Buttons/CustomButton/CustomButton';
import { useLogin } from './hooks/useLogin';
import TitleForm from '../components/TitleForm/TitleForm';
import FormFooterLink from '../components/FormFooterLink/FormFooterLink';

export default function LoginForm() {
  const { register, handleSubmit, handleLogin, errors } = useLogin();

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
        <TitleForm
          title="Entrar no Sistema"
          subtitle="Acesse seu painel administrativo"
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
          onSubmit={handleSubmit(handleLogin)}
        >
          <Input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Digite um e-mail válido',
              },
            })}
            label="E-mail corporativo"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
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
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <CustomButton type="submit">Entrar</CustomButton>

          <FormFooterLink
            href={'/cadastro'}
            text="Não tem conta?"
            textLink="Criar conta"
          />
        </Stack>
      </Box>
    </Box>
  );
}
