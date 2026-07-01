import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
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
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Nome"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="E-mail"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Confirme o e-mail"
            variant="outlined"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
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
            // onClick={handleLogin}
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
