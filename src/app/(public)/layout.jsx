import HeaderAuth from '@/features/Auth/components/HeaderAuth';

export default function LayoutPublic({ children }) {
  return (
    <>
      <HeaderAuth />
      {children}
    </>
  );
}
