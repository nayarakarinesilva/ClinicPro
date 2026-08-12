import HeaderAuth from '@/features/Auth/components/HeaderAuth/HeaderAuth';

export default function LayoutPublic({ children }) {
  return (
    <>
      <HeaderAuth />
      {children}
    </>
  );
}
