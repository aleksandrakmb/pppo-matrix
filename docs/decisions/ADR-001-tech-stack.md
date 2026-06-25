# ADR-001: Tech Stack dla MVP

## Data: 2026-06-25
## Status: PROPOSED

---

## Kontekst

Budujemy web app dla PPO. Priorytet to szybkość dostarczenia MVP i łatwość utrzymania przez mały zespół. Aplikacja na MVP nie potrzebuje backendu — dane w localStorage.

---

## Decyzja (propozycja do akceptacji)

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| Framework | **Next.js 14** (App Router) | Industry standard, dobre SEO, łatwy deploy na Vercel |
| UI | **React + TypeScript** | Type safety, duży ekosystem |
| Stylowanie | **Tailwind CSS** | Szybkie prototypowanie, spójna estetyka |
| Komponenty | **shadcn/ui** | Gotowe, dostępne komponenty, nie lock-in |
| Wizualizacja matrycy | **własny SVG / Canvas** lub **recharts** | Do ustalenia po prototypie |
| State management | **useState / useContext** (na start) | Wystarczające dla MVP bez backendu |
| Persystencja | **localStorage** | Brak backendu na MVP |
| Testy | **Vitest + Testing Library** | Szybkie, integracja z Vite |
| Deploy | **Vercel** | Zero-config dla Next.js |
| Repozytorium | **GitHub** | Standard |

---

## Alternatywy odrzucone

- **Vite + React** zamiast Next.js — odrzucone bo Next.js daje routing i deploy za darmo
- **Supabase od razu** — odrzucone, localStorage wystarczy na MVP, backend komplikuje first deploy
- **MUI / Chakra** zamiast shadcn — odrzucone, shadcn daje więcej kontroli nad kodem

---

## Konsekwencje

✅ Szybki first deploy (Vercel + Next.js = kilka minut)
✅ TypeScript łapie błędy wcześnie
⚠️ localStorage = brak synchronizacji między urządzeniami (akceptowalne na MVP)
⚠️ Przy v2 trzeba dodać backend (ale Next.js ma API routes gotowe)

---

## Wymaga akceptacji przez: Aleksandra K.
