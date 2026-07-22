import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      setError("Preencha os campos");
      return;
    }
    try {
      const response = await login(form.email, form.password);

      if (response.success) {
        navigate("/dashboard");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    handleLogin,
    handleChange,
    form,
    error,
  };
};
