import Header from '@/features/Auth/components/Header/Header';

export default function LayoutPublic({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
