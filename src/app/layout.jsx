import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
import Providers from './providers';
import Footer from '@/shared/Footer/Footer';
import { Box } from '@mui/material';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}
