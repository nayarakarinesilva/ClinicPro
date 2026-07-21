import React from "react";
import { Box, Typography } from "@mui/material";

import LoginImage from "./components/LoginImage";
import LoginForm from "./components/LoginForm";
import Header from "../../../shared/Header/Header";
import Footer from "../../../shared/Footer/Footer";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1350,
            height: 700,
            bgcolor: "#fff",
            borderRadius: 3,
            overflow: "hidden",
            display: "flex",
            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          }}
        >
          <LoginImage />

          <LoginForm />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Login;
