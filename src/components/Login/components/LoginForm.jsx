import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Input from "../../../ui/Input";
import logo from "../../../../public/logo.svg";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { handleLogin, handleChange, form, error } = useLogin();

  return (
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

        <Input
          label="E-mail corporativo"
          name={"email"}
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
        />

        <Input
          label="Senha"
          name={"password"}
          type="password"
          value={form.password}
          onChange={handleChange}
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
  );
};

export default LoginForm;
