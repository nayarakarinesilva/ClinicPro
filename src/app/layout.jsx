
import GlobalProviders from '../components/providers/GlobalProviders';
import Footer from '@/shared/Footer/Footer';
import { Box } from '@mui/material';

export const metadata = {
  title: 'ClinicPro',
  description: 'Sistema para gerenciamento de clínicas.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
    >
      <body>
        <GlobalProviders>
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>

            <Footer />
          </Box>
        </GlobalProviders>
      </body>
    </html>
  );
}
