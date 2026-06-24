import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha os campos");
      return;
    }

    const result = login(email, password);
    if (result) {
      navigate("/dashboard");
      return;
    }
    setError(result.message);
  };
  
  return (
    <>
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
      <Box sx={{ marginTop: "30px", textAlign: "center" }}>
        <Typography
          sx={{
            color: "#6b7280",
          }}
        >
          Não tem conta?
        </Typography>

        <Typography>
          <Link
            to="/login"
            style={{
              color: "#7C3AED",
              fontWeight: 500,
            }}
            to="/register"
          >
            Criar conta
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Login;
