"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { isComplete } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isComplete) {
      router.replace("/");
    }
  }, [isComplete, router]);

  if (!isComplete) {
    return null;
  }

  return <>{children}</>;
}
