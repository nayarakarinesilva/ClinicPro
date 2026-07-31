'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Input from '@/ui/Input/Input';
import CustomButton from '@/ui/CustomButton/CustomButton';
import Link from 'next/link';
import { useLogin } from '../hooks/useLogin';

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
        <Box sx={{ color: '#434655' }}>
          <Typography sx={{ fontSize: '28px', fontWeight: 700 }}>
            Entrar no Sistema
          </Typography>

          <Typography>Acesse seu painel administrativo</Typography>
        </Box>

        <form
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
          <CustomButton text="Entrar na Plataforma" type="submit" />
          <Box
            mt={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography color="text.secondary">Não tem conta?</Typography>
            <Link
              href={'/cadastro'}
              style={{
                color: '#004AC6',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Criar conta
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
