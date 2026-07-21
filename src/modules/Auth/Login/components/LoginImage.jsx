import { Box, Typography } from "@mui/material";
import loginImage from "../images/loginImage.png";

const LoginImage = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: { xs: "none", md: "flex" },
        minHeight: 650,
        borderRadius: "16px 0px 0px 16px",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${loginImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.15))",
        }}
      />

      {/* Texto */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 40,
          color: "#fff",
          zIndex: 1,
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Gerenciamento inteligente
          <br />
          para sua clínica.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Otimize o atendimento, automatize processos e acompanhe sua clínica em
          um só lugar.
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginImage;
