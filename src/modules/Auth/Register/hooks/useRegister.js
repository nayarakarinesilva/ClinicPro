import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
import { Password } from "@mui/icons-material";

export const useRegister = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [msgSucess, setMsgSucess] = useState("");
  const [touched, setTouched] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validators = {
    name: (value) => value && value.length >= 3,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value?.toLowerCase()),
    confirmEmail: (value) => value === form.email,
    password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
  };

  const errors = {
    name: !validators.name(form.name),
    email: !validators.email(form.email),
    confirmEmail: !validators.confirmEmail(form.confirmEmail),
    password: !validators.password(form.password),
  };

  const errorMessages = {
    name: "Nome deve ter pelo menos 3 caracteres",
    email: "E-mail inválido",
    confirmEmail: "E-mails não conferem",
    password: "Senha deve ter letras e números (mínimo 6 caracteres)",
  };

  const isFormValid =
    !errors.name && !errors.email && !errors.confirmEmail && !errors.password;

  const handleRegister = (e) => {
    if (!isFormValid) {
      setError("Preencha todos os campos");

      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    register(form.name, form.email, form.password);

    e.preventDefault();
    setForm({
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
    });

    setTouched({});
    setError("");

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return {
    handleChange,
    form,
    setTouched,
    touched,
    errorMessages,
    errors,
    handleRegister,
    error,
  };
};
