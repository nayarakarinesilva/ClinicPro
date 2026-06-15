import Sidebar from "../sidebar/Sidebar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 8fr" }}>
      <Sidebar />
      <Box>Renderizar as abas do menu</Box>
    </Box>
  );
};

export default Layout;
