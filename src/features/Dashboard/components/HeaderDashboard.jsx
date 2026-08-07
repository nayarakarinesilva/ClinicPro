'use client';

import { formatFullDate } from '@/helpers/dateHelper';
import { useAuthStore } from '@/store/useAuthStore';
import { Avatar, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HeaderDashboard() {
  const today = formatFullDate();
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    // Remove o cookie que o middleware verifica
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    router.push('/login');
  };

  console.log(user?.name);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        padding: 1,
      }}
    >
      {today}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderLeft: '1px solid',
          borderColor: 'divider',
          padding: 1,
        }}
      >
        {user?.name}
        <Avatar sx={{ bgcolor: 'primary.main' }}>NK</Avatar>
      </Box>
      <Button onClick={handleLogout}>Sair</Button>
    </Box>
  );
}
