"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Spinner } from "@/components/ui/spinner";
export interface UserProfile {
  username: string;
  jobTitle: string;
}

interface UserContextType {
  profile: UserProfile;
  setProfile: (profile: UserProfile | ((prev: UserProfile) => UserProfile)) => void;
  isComplete: boolean;
  signOut: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);
  const [profile, setProfile] = useLocalStorage<UserProfile>("user-profile", {
    username: "",
    jobTitle: "",
  });

  // wait for client-side hydration to check localStorage, show a spinner meanwhile
  useEffect(() => {
    setInitialized(true);
  }, []);

  if (!initialized) {
    return <div className="flex items-center justify-center h-full"><Spinner className="size-8" /></div>;
  }

  const isComplete = Boolean(profile.username && profile.jobTitle);

  const signOut = () => {
    localStorage.removeItem("user-profile");
    setProfile({ username: "", jobTitle: "" });
    router.push("/");
  };

  return (
    <UserContext.Provider value={{ profile, setProfile, isComplete, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
