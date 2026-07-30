import React from "react";
import { Box } from "@mui/material";
import LoginImage from "./components/LoginImage";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
          mt: 7,
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
    </Box>
  );
}
