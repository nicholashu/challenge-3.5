"use server";

import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "user-authenticated";

/**
 * On profile creation or update, set a cookie to indicate the user is authenticated
 * as the data is loaded server-side this is used to ensure data is only retrieved
 * and displayed after authentication
 */
export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, "true", {
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value === "true";
}
