import React from "react";
import { Box, Typography } from "@mui/material";
import Input from "../../../../ui/Input";
import logo from "../../../../assets/logo.svg";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Button from "../../../../ui/Button/Button";

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
          height: "550px",
          width: "100%",
          maxWidth: 480,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          padding: "40px",
        }}
      >
        <Box sx={{ color: "#434655" }}>
          <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>
            Entrar no Sistema
          </Typography>

          <Typography>Acesse seu painel administrativo</Typography>
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
        <Button text="Entrar na Plataforma" onClick={handleLogin} />
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
