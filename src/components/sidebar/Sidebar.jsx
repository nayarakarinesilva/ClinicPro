import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/theme";
import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <SidebarHeader />
      <SidebarItem
        icon={DashboardIcon}
        text={"Dashboard"}
        onClick={() => navigate("/")}
      />
      <SidebarItem
        icon={PermIdentityOutlinedIcon}
        text={"Pacientes"}
        onClick={() => navigate("/patients")}
      />
      <SidebarItem
        icon={MedicalServicesOutlinedIcon}
        text={"Médicos"}
        onClick={() => navigate("/doctors")}
      />
      <SidebarItem
        icon={InsertInvitationOutlinedIcon}
        text={"Consultas"}
        onClick={() => navigate("/consultations")}
      />
    </Box>
  );
};

export default Sidebar;
