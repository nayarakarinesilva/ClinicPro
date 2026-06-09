import { Box, Typography } from "@mui/material";
import Logo from "../../../public/logo.svg";


const SidebarHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        marginBottom:"1.5rem"
      }}
    >
      <Box>
        <img width={50} src={Logo} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          ClinicPro
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "text.disabled",
            fontSize: "0.7rem",
            fontWeight: 500,
          }}
        >
          Medical Management
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarHeader
