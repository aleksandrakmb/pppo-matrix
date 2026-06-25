# CLAUDE.md — Instrukcje dla Claude Code

## Projekt

**PPO Matrix** — aplikacja webowa do priorytetyzacji feature'ów (Impact vs Effort).

## Stack

- Next.js 14 App Router + TypeScript + Tailwind CSS + shadcn/ui
- localStorage (brak backendu na MVP)
- Deploy: Vercel

## Konwencje

- Komponenty: PascalCase (`SessionCard.tsx`)
- Pliki lib/utility: camelCase (`storage.ts`)
- Foldery: kebab-case
- Typy w `src/types/index.ts`
- Logika localStorage tylko w `src/lib/storage.ts`

## Czego NIE robić

- Nie dodawaj backendu / bazy danych bez wyraźnej prośby — MVP używa localStorage
- Nie instaluj bibliotek bez uzgodnienia — sprawdź najpierw czy shadcn/ui lub Tailwind wystarczy
- Nie zmieniaj struktury folderów bez aktualizacji `docs/architecture/01-folder-structure.md`

## Decyzje architektoniczne

Wszystkie są w `docs/decisions/`. Przed dużą zmianą techniczną — stwórz ADR.
