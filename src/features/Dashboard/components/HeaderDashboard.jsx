'use client';

import { formatFullDate } from '@/helpers/dateHelper';
import { useAuthStore } from '@/store/useAuthStore';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { getAvatarInitial } from '@/helpers/userHelper';

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

  const userNameAvatar = getAvatarInitial(user?.name);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        padding: 1,
      }}
    >
      <Typography sx={{ color: 'text.secondary' }}>
        Seja bem vindo(a): {user?.name}
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {' '}
          <Typography sx={{ color: 'text.muted', mr: 3 }}>{today}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            borderLeft: '1px solid',
            borderColor: 'divider',
            padding: 1,
          }}
        >
          {user?.name && (
            <Avatar sx={{ bgcolor: 'primary.main' }}>{userNameAvatar}</Avatar>
          )}
          <Button onClick={handleLogout}>
            <ExitToAppIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
