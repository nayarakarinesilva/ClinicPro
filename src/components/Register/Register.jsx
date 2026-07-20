import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useRegister } from "./hooks/useRegister";
import Input from "../../ui/Input";

const Register = () => {
  const {
    handleChange,
    form,
    setTouched,
    touched,
    errorMessages,
    errors,
    handleRegister,
    error,
  } = useRegister();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "500px",
          padding: 2,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Crie seu cadastro
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            gap: 3,
          }}
        >
          <Input
            label="Nome"
            type="text"
            placeholder={"Nome"}
            name={"name"}
            value={form.name}
            onChange={handleChange}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            msgError={touched.name && errors.name ? errorMessages.name : ""}
          />
          <Input
            label="E-mail"
            type="email"
            placeholder={"E-mail"}
            name={"email"}
            value={form.email}
            onChange={handleChange}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            msgError={touched.email && errors.email ? errorMessages.email : ""}
          />
          <Input
            label="Confirmar e-mail"
            type="email"
            placeholder={"Cofirme e-mail"}
            name={"confirmEmail"}
            value={form.confirmEmail}
            onChange={handleChange}
            onBlur={() =>
              setTouched((prev) => ({ ...prev, confirmEmail: true }))
            }
            msgError={
              touched.confirmEmail && errors.confirmEmail
                ? errorMessages.confirmEmail
                : ""
            }
          />
          <Input
            label="Senha"
            type="password"
            placeholder={"Senha"}
            name={"password"}
            value={form.password}
            onChange={handleChange}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            msgError={
              touched.password && errors.password ? errorMessages.password : ""
            }
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
            type="submit"
            variant="contained"
            onClick={handleRegister}
            sx={{
              maxWidth: "250px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
