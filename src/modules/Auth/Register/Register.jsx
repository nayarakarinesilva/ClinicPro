import React from "react";
import { Box } from "@mui/material";
import RegisterForm from "./components/RegisterForm";
import Header from "../../../shared/Header/Header";
import Footer from "../../../shared/Footer/Footer";

const Register = () => {
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
        <RegisterForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
