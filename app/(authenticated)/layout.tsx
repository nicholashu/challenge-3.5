import AuthGate from "./AuthGate";
import Navbar from "@/components/Navbar";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGate>
      <Navbar />
      {children}
    </AuthGate>
  );
};

export const revalidate = false;

export default AuthenticatedLayout;
