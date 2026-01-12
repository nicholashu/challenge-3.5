"use client";

import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import ProfileForm from "@/components/ProfileForm";

const PageContent = () => {
  const { isComplete, signOut, profile } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnSuccess = () => {
    setIsSubmitting(true);
    // use window.location to avoid slow client-side navigation
    window.location.assign("/information");
  };

  // prevents flashing in the complete screen, after form submission
  const showCompleteScreen = isComplete && !isSubmitting;

  return (
    <div className="flex h-full items-center justify-center bg-white md:bg-zinc-50 font-sans">
      <div className="flex w-full max-w-lg flex-col justify-center bg-white p-8">
        {showCompleteScreen ? (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-center">Hey {profile.username}, it&rsquo;s you again!</h2>
            <div className="flex flex-col gap-4 mt-4 items-center">
              <Button variant="link" asChild className="text-xl">
                <Link href="/information">Back to the Ricks</Link>
              </Button>
              <Button variant="outline" size="lg" onClick={signOut} className="w-max">Sign out</Button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
            <p className="text-zinc-600 mb-6">
              Please enter your information to continue
            </p>
            <ProfileForm onSuccess={handleOnSuccess}/>
          </>
        )}
      </div>
    </div>
  );
}

export default PageContent;