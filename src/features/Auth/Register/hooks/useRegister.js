'use client';
import { useForm } from 'react-hook-form';

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    if (data.email !== data.confirmEmail) {
      alert('Os e-mails não são iguais');
      return;
    }
    // Pega usuários existentes
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Pega usuários existentes
    const hasUser = users.some((user) => user.email === data.email);

    if (hasUser) {
      alert('Já tem uma conta com esse e-mail cadastrada.');
      return;
    }

    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    // Adiciona novo usuário
    users.push(user);

    // Salva novamente
    localStorage.setItem('users', JSON.stringify(users));
    console.log(data);
  };

  return { register, handleSubmit, handleRegister, errors };
};
