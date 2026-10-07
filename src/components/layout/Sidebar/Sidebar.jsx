'use client';

import { Box, Drawer, IconButton } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

import SidebarHeader from './components/SidebarHeader';
import SidebarItem from './components/SidebarItem';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (route) => {
    router.push(route);
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        padding: 1,
      }}
    >
      <SidebarHeader />
      <SidebarItem
        icon={DashboardIcon}
        text={'Dashboard'}
        active={pathname === '/painel'}
        onClick={() => handleNavigate('/painel')}
      />
      <SidebarItem
        icon={InsertInvitationOutlinedIcon}
        text={'Consultas'}
        active={pathname === '/consulta'}
        onClick={() => handleNavigate('/consulta')}
      />
      <SidebarItem
        icon={PermIdentityOutlinedIcon}
        text={'Pacientes'}
        active={pathname === '/pacientes'}
        onClick={() => handleNavigate('/pacientes')}
      />
      {/* <SidebarItem
        icon={MedicalServicesOutlinedIcon}
        text={"Médicos"}
        onClick={() => handleNavigate("/doctors")}
      /> */}
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'block',
            md: 'none',
          },
          height: 56,
        }}
      >
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {DrawerList}
      </Drawer>
      {/* Sidebar normal no desktop */}
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
          padding: 1,
        }}
      >
        {DrawerList}
      </Box>
    </>
  );
};

export default Sidebar;
