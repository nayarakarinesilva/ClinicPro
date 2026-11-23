import Header from '@/components/layout/Header/Header';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { Box } from '@mui/material';

export default function LayoutPrivate({ children }) {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 8fr',
          minHeight: '100vh',
        }}
      >
        <Sidebar />

        <Box
          sx={{
            p: 2,
            minHeight: '100vh',
            boxSizing: 'border-box',
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
