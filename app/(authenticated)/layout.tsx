import AuthGate from "./AuthGate";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGate>{children}</AuthGate>;
};

export const revalidate = false;

export default AuthenticatedLayout;
