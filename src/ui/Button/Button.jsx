import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ onClick, text }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth
      sx={{
        py: 1.2,
        fontWeight: 600,
        textTransform: "none",
        background: "#004AC6",
      }}
    >
      {text}
    </Button>
  );
};

export default Button;
