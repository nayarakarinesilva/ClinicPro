import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../sidebar/Sidebar";
import { Box, Button } from "@mui/material";

const Layout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 8fr" }}>
      <Sidebar />
      <Box sx={{ p: 3 }}>
        <Button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Sair
        </Button>

        {/* Renderiza a página selecionada no menu */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
