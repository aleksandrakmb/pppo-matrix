"use client";

import { useRouter } from "next/navigation";
import { setRole } from "@/lib/storage";
import type { UserRole } from "@/types";

export default function RoleSelectionAlt() {
  const router = useRouter();

  function handleRoleSelect(role: UserRole) {
    setRole(role);
    router.push("/sessions");
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* PPO — lewa strona */}
      <button
        onClick={() => handleRoleSelect("ppo")}
        className="group relative flex-1 flex flex-col items-center justify-center px-12 py-16 bg-gray-900 text-white cursor-pointer transition-all duration-300 hover:flex-[1.15]"
      >
        <div className="flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-105">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Jestem
          </span>
          <span className="text-5xl font-bold">PPO</span>
          <span className="text-gray-400 text-center text-sm max-w-xs leading-relaxed mt-2">
            Tworzę sesje i oceniam<br />Impact feature'ów
          </span>
          <span className="mt-6 px-6 py-2 border border-white/30 rounded-full text-sm text-white/70 group-hover:bg-white group-hover:text-gray-900 transition-all duration-200">
            Wejdź jako PPO →
          </span>
        </div>
      </button>

      {/* Separator z nazwą aplikacji */}
      <div className="hidden md:flex flex-col items-center justify-center w-0 relative z-10">
        <div className="absolute flex flex-col items-center gap-1 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">PPO</span>
          <span className="text-lg font-black text-gray-900">Matrix</span>
        </div>
      </div>

      {/* Nazwa na mobile */}
      <div className="md:hidden flex items-center justify-center py-4 bg-white border-y border-gray-100">
        <span className="text-sm font-black tracking-widest text-gray-900 uppercase">PPO Matrix</span>
      </div>

      {/* Developer — prawa strona */}
      <button
        onClick={() => handleRoleSelect("developer")}
        className="group relative flex-1 flex flex-col items-center justify-center px-12 py-16 bg-white text-gray-900 cursor-pointer transition-all duration-300 hover:flex-[1.15] border-l border-gray-100"
      >
        <div className="flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-105">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Jestem
          </span>
          <span className="text-5xl font-bold">Developer</span>
          <span className="text-gray-400 text-center text-sm max-w-xs leading-relaxed mt-2">
            Oceniam Effort —<br />czas i złożoność feature'ów
          </span>
          <span className="mt-6 px-6 py-2 border border-gray-900/30 rounded-full text-sm text-gray-500 group-hover:bg-gray-900 group-hover:text-white transition-all duration-200">
            Wejdź jako Developer →
          </span>
        </div>
      </button>
    </main>
  );
}
