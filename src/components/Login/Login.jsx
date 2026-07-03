import React from "react";
import { Box } from "@mui/material";

import LoginImage from "./components/LoginImage";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <LoginImage />

      <LoginForm />
    </Box>
  );
};

export default Login;
