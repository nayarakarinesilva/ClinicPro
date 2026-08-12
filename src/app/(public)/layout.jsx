import Header from '@/ui/Header';

export default function LayoutPublic({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
