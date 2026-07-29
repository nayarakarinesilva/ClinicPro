"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import SidebarHeader from "./components/SidebarHeader";
import SidebarItem from "./components/SidebarItem";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

const Sidebar = () => {
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(route);
  };

  return (
    <Box
      sx={{
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <SidebarHeader />
      <SidebarItem
        icon={DashboardIcon}
        text={"Dashboard"}
        onClick={() => handleNavigate("/dashboard")}
      />
      <SidebarItem
        icon={PermIdentityOutlinedIcon}
        text={"Pacientes"}
        onClick={() => handleNavigate("/patients")}
      />
      <SidebarItem
        icon={MedicalServicesOutlinedIcon}
        text={"Médicos"}
        onClick={() => handleNavigate("/doctors")}
      />
      <SidebarItem
        icon={InsertInvitationOutlinedIcon}
        text={"Consultas"}
        onClick={() => handleNavigate("/consultations")}
      />
    </Box>
  );
};

export default Sidebar;
