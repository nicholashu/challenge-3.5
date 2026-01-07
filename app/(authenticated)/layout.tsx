import AuthGate from "./AuthGate";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGate><div className="w-full h-full">{children}</div></AuthGate>;
};

export const revalidate = false;

export default AuthenticatedLayout;
