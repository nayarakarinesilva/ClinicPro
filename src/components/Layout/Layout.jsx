import { useAuth } from "../../context/AuthContext";
import Sidebar from "../sidebar/Sidebar";
import { Box, Button } from "@mui/material";

const Layout = () => {
  const { logout } = useAuth();
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 8fr" }}>
      <Sidebar />
      <Box>Renderizar as abas do menu</Box>
      <Button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        sair
      </Button>
    </Box>
  );
};

export default Layout;
