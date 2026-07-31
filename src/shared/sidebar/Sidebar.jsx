'use client';

import { Box } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

import SidebarHeader from './components/SidebarHeader';
import SidebarItem from './components/SidebarItem';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (route) => {
    router.push(route);
  };

  return (
    <Box
      sx={{
        borderRight: '1px solid',
        borderColor: 'divider',
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
      <SidebarItem
        icon={InsertInvitationOutlinedIcon}
        text={'Consultas'}
        active={pathname === '/consultas'}
        onClick={() => handleNavigate('/consultas')}
      />
    </Box>
  );
};

export default Sidebar;
