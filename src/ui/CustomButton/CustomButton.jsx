import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ onClick, text }) => {
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

export default CustomButton;
