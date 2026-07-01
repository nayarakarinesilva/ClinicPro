import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login.svg";
import logo from "../../../public/logo.svg";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Preencha os campos");
      return;
    }
    try {
      const response = await login(email, password);
      console.log(response);

      if (response.success) {
        navigate("/dashboard");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* LADO ESQUERDO - IMAGEM */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Box
          component="img"
          src={loginImage}
          alt="Login illustration"
          sx={{
            width: "100%",
            maxWidth: 500,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* LADO DIREITO - FORM */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          color: "#333",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            <Box
              component="img"
              src={logo}
              alt="Login illustration"
              sx={{
                width: "40px",
                // maxWidth: 500,
                height: "auto",
                objectFit: "contain",
              }}
            />
            <Typography variant="h4" fontWeight={600}>
              Bem-vindo ao ClinicPro
            </Typography>

            <Typography color="text.secondary">
              Acesse sua conta para gerenciar sua clínica
            </Typography>
          </Box>

          <TextField
            label="E-mail corporativo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />

          {error && (
            <Typography color="error" fontSize={14}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
              background: "#004AC6",
            }}
          >
            Entrar na Plataforma
          </Button>

          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary">Não tem conta?</Typography>

            <Link
              to="/register"
              style={{
                color: "#004AC6",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Criar conta
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
