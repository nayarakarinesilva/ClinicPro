'use client';

import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useLogin = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.login);
  const users = useAuthStore((state) => state.users);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    const user = login(data.email, data.password);

    if (user === true) {
      setUser(user);
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
