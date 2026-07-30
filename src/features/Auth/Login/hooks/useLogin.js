"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const hasLogin = login(form.email, form.password);

    if (hasLogin === true) {
      router.push("/painel");
    } else {
      alert("E-mail ou senha incorretos");
    }
  };

  const users = [
    {
      email: "nayara@email.com",
      password: "123456",
      name: "Nayara",
    },
  ];

  function login(email, password) {
    const user = users.find((user) => user.email === email);

    if (!user) {
      return "Usuário não encontrado";
    }

    if (user.password !== password) {
      return "Senha incorreta";
    }

    return true;
  }

  return {
    handleLogin,
    handleChange,
    form
  };
};
