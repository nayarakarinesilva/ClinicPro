'use client';

import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerUser = useAuthStore((state) => state.register);
  const users = useAuthStore((state) => state.users);
  const router = useRouter();

  const handleRegister = (data) => {
    if (data.email !== data.confirmEmail) {
      alert('Os e-mails não são iguais');
      return;
    }

    // Pega usuários existentes
    const hasUser = users.some((user) => user.email === data.email);

    if (hasUser) {
      alert('Já tem uma conta com esse e-mail cadastrada.');
      reset();
      return;
    }

    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    // Adiciona novo usuário
    registerUser(user);

    alert('Cadastro realizado com sucesso!');

    reset();

    router.push('/login');
    console.log(data);
  };

  return { register, handleSubmit, handleRegister, errors };
};
