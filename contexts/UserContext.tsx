"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export interface UserProfile {
  username: string;
  jobTitle: string;
}

interface UserContextType {
  profile: UserProfile;
  setProfile: (profile: UserProfile | ((prev: UserProfile) => UserProfile)) => void;
  isComplete: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useLocalStorage<UserProfile>("user-profile", {
    username: "",
    jobTitle: "",
  });

  const isComplete = Boolean(profile.username && profile.jobTitle);

  return (
    <UserContext.Provider value={{ profile, setProfile, isComplete }}>
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
