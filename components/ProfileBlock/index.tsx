"use client";

import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import ProfileForm from "@/components/ProfileForm";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ProfileBlock() {
  const { profile } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <div className="flex max-w-lg w-full flex-col justify-center p-8 gap-7">
        {isEditing ? (
          <>
            <h2 className="text-2xl font-semibold mb-2">Edit Profile</h2>
            <p className="text-zinc-600 mb-6">
              Update your information below
            </p>
            <ProfileForm
              onSubmit={() => setIsEditing(false)}
              onCancel={() => setIsEditing(false)}
              submitLabel="Save Changes"
            />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-6">Profile</h1>
            <div className="space-y-4">
              <div>
                <Label>Username</Label>
                <p className="text-lg">{profile.username}</p>
              </div>

              <div>
                <Label>Job Title</Label>
                <p className="text-lg">{profile.jobTitle}</p>
              </div>
            </div>
            <Button
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
