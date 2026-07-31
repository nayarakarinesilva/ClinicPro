'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import Input from '@/ui/Input/Input';
import Link from 'next/link';
import { useRegister } from '../hooks/useRegister';

export default function RegisterForm() {
  const { register, handleSubmit, handleRegister, errors } = useRegister();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: '500px',
        padding: 10,
        boxShadow: '0 12px 30px rgba(0,0,0,.08)',
      }}
    >
      <Box sx={{ textAlign: 'center', color: '#434655' }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 700 }}>
          Criar conta
        </Typography>
        <Typography color="text.secondary" textAlign="center" mb={2}>
          Preencha os dados para criar sua conta.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          gap: 3,
        }}
      >
        <form
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
            <Button
              type="submit"
              variant="contained"
              sx={{
                maxWidth: '250px',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Cadastrar
            </Button>
          </Box>

          <Box
            mt={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography color="text.secondary">Já tem uma conta?</Typography>
            <Link
              href={'/login'}
              style={{
                color: '#004AC6',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Entrar no sistema
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
