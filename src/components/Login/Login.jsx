import React from "react";
import { Box, Typography } from "@mui/material";

import LoginImage from "./components/LoginImage";
import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";
import LoginFooter from "./components/LoginFooter";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <LoginHeader />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f3f4fd",
        }}
      >
        <LoginImage />

        <LoginForm />
      </Box>

      <LoginFooter />
    </Box>
  );
};

export default Login;
