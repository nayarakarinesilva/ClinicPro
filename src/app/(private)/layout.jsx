import HeaderDashboard from '@/features/Dashboard/components/HeaderDashboard';
import Sidebar from '@/shared/sidebar/Sidebar';
import { Box } from '@mui/material';

export default function LayoutPrivate({ children }) {
  return (
    <>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 8fr' }}>
        <Sidebar />
        <Box
          sx={{
            p: 2,
            height: '95vh',
            backgroundColor: 'background.paper',
          }}
        >
          <HeaderDashboard />

          {children}
        </Box>
      </Box>
    </>
  );
}
