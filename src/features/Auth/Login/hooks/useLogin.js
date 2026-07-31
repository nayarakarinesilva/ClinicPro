'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useLogin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const users = [
    {
      email: 'nayara@email.com',
      password: '123456',
      name: 'Nayara',
    },
  ];

  function login(email, password) {
    const user = users.find((user) => user.email === email);

    if (!user) {
      return 'Usuário não encontrado';
    }

    if (user.password !== password) {
      return 'Senha incorreta';
    }

    return true;
  }

  const handleLogin = (data) => {
    const hasLogin = login(data.email, data.password);

    if (hasLogin === true) {
      router.push('/painel');
    } else {
      alert('E-mail ou senha incorretos');
    }
  };

  return {
    register,
    handleSubmit,
    handleLogin,
    errors,
  };
};
