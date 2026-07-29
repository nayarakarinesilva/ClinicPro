import AuthHeader from "@/features/Auth/components/AuthHeader/Header";

export default function LayoutPublic({ children }) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
