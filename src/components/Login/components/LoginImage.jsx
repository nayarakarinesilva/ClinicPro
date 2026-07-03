import { Box } from "@mui/material";
import React from "react";
import loginImage from "../../../assets/login.svg";

const LoginImage = () => {
  return (
    <Box
      sx={{
        flex: 1.2,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        component="img"
        src={loginImage}
        sx={{
          width: "100%",
          maxWidth: 900,
          height: 800,
          objectFit: "contain",
          ml: -4,
        }}
      />
    </Box>
  );
};

export default LoginImage;
