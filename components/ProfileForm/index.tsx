"use client";

import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface Props {
  onSuccess?: () => void;
  onCancel?: () => void;
  submitLabel?: string;
}

export default function ProfileForm({ onSuccess, onCancel, submitLabel }: Props) {
  const { profile, setProfile } = useUser();
  const [formData, setFormData] = useState({
    username: profile.username,
    jobTitle: profile.jobTitle,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setProfile(formData);
      onSuccess?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Enter your username"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="jobTitle">Job Title</FieldLabel>
          <Input
            id="jobTitle"
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            placeholder="Enter your job title"
            required
          />
        </Field>

        <Field orientation="horizontal" className="mt-4 gap-4">
          <Button type="submit" className="flex-1">
            {submitLabel || "Continue"}
          </Button>
          {onCancel && (
            <Button
              type="button"
              variant="secondary"
              onClick={onCancel}
              className="flex-1"
            >
              Cancel
            </Button>
          )}
        </Field>
      </FieldGroup>
    </form>
  );
}
