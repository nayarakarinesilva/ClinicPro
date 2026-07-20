import { Box } from "@mui/material";
import React from "react";
import loginImage from "../../../assets/loginImage.svg";

const LoginImage = () => {
  return (
    <Box
      sx={{
        flex: 1.2,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={loginImage}
        sx={{
          width: "100%",
          maxWidth: 900,
          maxHeight: "80vh",
          height: "auto",
          objectFit: "contain",
          ml: -4,
        }}
      />
    </Box>
  );
};

export default LoginImage;
