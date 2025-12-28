import type { User } from "../models";

export async function getUser(): Promise<User | null> {
  const res = await fetch("/api/user", { credentials: "include" });

  if (!res.ok) return null;

  return res.json();
}

export async function userLogout(): Promise<void> {
  await fetch("/api/logout", {
    method: "POST",
    credentials: "include",
  });
}
