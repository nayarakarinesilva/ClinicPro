import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const sucess = login(email, password);
    if (sucess) {
      navigate("/dashboard");
    } else {
      alert("Email ou senha inválidos");
    }
  };
  return (
    <Box>
      <Typography variant="h5">Bem-vindo ao ClinicPro</Typography>
      <Typography>Acesse sua conta para gerenciar sua clínica</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          gap: "30px",
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="E-mail corporativo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={handleLogin}>
        Entrar na Plataforma
      </Button>
    </Box>
  );
};

export default Login;
