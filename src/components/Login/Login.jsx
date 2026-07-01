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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Bem-vindo ao ClinicPro
        </Typography>
        <Typography>Acesse sua conta para gerenciar sua clínica</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            gap: 2,
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              maxWidth: "250px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Entrar na Plataforma
          </Button>
        </Box>
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
              color: "#1f1cca",
              fontWeight: 500,
            }}
            to="/register"
          >
            Criar conta
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
