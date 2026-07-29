import { Box, Icon, Typography } from "@mui/material";

const SidebarItem = ({ icon: IconComponent, text, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0.5rem 1rem",
        gap: "0.7rem",

        minWidth: "223px",
        minHeight: "2rem",
        cursor: "pointer",
        borderRadius: "0.5rem",
        color: "text.muted",

        borderLeft: "4px solid transparent",

        "&:hover": {
          bgcolor: "background.primary",
          // Bordinha azul
          borderLeft: "4px solid",
          borderLeftColor: "primary.main",
        },
      }}
    >
      <IconComponent />
      <Typography sx={{ fontWeight: 500 }}>{text}</Typography>
    </Box>
  );
};

export default SidebarItem;
