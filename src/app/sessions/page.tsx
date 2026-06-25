"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRole } from "@/lib/storage";
import type { UserRole } from "@/types";

const roleLabels: Record<UserRole, string> = {
  ppo: "PPO",
  developer: "Developer",
};

export default function SessionsPage() {
  const router = useRouter();
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const stored = getRole();
    if (!stored) {
      router.replace("/");
      return;
    }
    setRole(stored);
  }, [router]);

  if (!role) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full mb-8">
          Zalogowany jako: <span className="font-bold text-gray-900">{roleLabels[role]}</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Lista sesji</h2>
        <p className="text-gray-400">Ta funkcja pojawi się wkrótce.</p>
      </div>
    </main>
  );
}
