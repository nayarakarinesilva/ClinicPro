import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function AuthHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 4,
        py: 4,
        height: 30,
        backgroundColor: "#fff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* 
      O priority fala para o Next:
      "Essa imagem é importante, carregue logo no início."
      */}
      <Image priority src="/logo.svg" alt="Logo" width={30} height={30} />

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
}
