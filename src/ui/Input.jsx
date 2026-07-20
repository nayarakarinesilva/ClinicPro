import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Input = ({ type, placeholder, value, onChange, label, onBlur, name, msgError }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          color: "#004AC6",
          fontWeight: 600,
          fontSize:"14px"
        }}
      >
        {label}
      </Typography>
      <TextField
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        sx={{ width: "100%" }}
      />
      <Typography sx={{ color: "red", fontSize: "12px" }}>
        {msgError}
      </Typography>
    </Box>
  );
};

export default Input;
