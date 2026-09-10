import Header from '@/components/layout/Header/Header';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
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
          <Header />

          {children}
        </Box>
      </Box>
    </>
  );
}
