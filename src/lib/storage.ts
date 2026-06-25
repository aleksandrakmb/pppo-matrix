import type { UserRole } from "@/types";

const ROLE_KEY = "pppo-matrix-role";

export function getRole(): UserRole | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(ROLE_KEY);
  if (value === "ppo" || value === "developer") return value;
  return null;
}

export function setRole(role: UserRole): void {
  sessionStorage.setItem(ROLE_KEY, role);
}
