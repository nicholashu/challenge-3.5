"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import ProfileForm from "@/components/ProfileForm";

export default function Home() {
  const router = useRouter();
  const { isComplete } = useUser();

  useEffect(() => {
    if (isComplete) {
      router.push("/profile");
    }
  }, [isComplete, router]);

  return (
    <div className="flex h-full items-center justify-center bg-zinc-50 font-sans">
      <div className="flex w-full max-w-lg flex-col justify-center bg-white p-8">
        <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
        <p className="text-zinc-600 mb-6">
          Please enter your information to continue
        </p>
        <ProfileForm />
      </div>
    </div>
  );
}
