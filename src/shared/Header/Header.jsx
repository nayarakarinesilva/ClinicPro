import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 4,
        py: 2,
        height: 30,
        backgroundColor: "#fff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="Login illustration"
        sx={{
          width: "30px",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#003594",
        }}
      >
        ClinicPro
      </Typography>
    </Box>
  );
};

export default Header;
