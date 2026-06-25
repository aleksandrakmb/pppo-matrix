# Struktura folderów projektu

## Data: 2026-06-25

---

## Docelowa struktura (Next.js App Router)

```
appka-pposow/
├── docs/                          # Dokumentacja projektu (nie kod)
│   ├── discovery/                 # Problem, user journey, badania
│   ├── requirements/              # Scope, user stories, akceptacja
│   ├── architecture/              # Decyzje techniczne, diagramy
│   └── decisions/                 # ADR (Architecture Decision Records)
│
├── src/
│   ├── app/                       # Next.js App Router — strony i layouty
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Strona główna (lista sesji)
│   │   ├── sessions/
│   │   │   ├── new/page.tsx       # Tworzenie nowej sesji
│   │   │   └── [id]/
│   │   │       ├── page.tsx       # Sesja — lista feature'ów
│   │   │       ├── score/page.tsx # Flow oceniania
│   │   │       └── matrix/page.tsx # Wizualizacja matrycy
│   │   └── globals.css
│   │
│   ├── components/                # Reużywalne komponenty UI
│   │   ├── ui/                    # shadcn/ui komponenty (auto-generowane)
│   │   ├── session/               # Komponenty związane z sesją
│   │   ├── scoring/               # Komponenty flow oceniania
│   │   └── matrix/                # Komponenty wizualizacji
│   │
│   ├── lib/                       # Logika biznesowa, helpery
│   │   ├── storage.ts             # localStorage read/write
│   │   ├── matrix.ts              # Obliczenia dla matrycy
│   │   └── utils.ts               # Generalne utility (cn, formattery)
│   │
│   └── types/                     # TypeScript typy i interfejsy
│       └── index.ts
│
├── public/                        # Statyczne assety
├── .github/
│   └── workflows/                 # CI/CD (opcjonalnie)
├── CLAUDE.md                      # Instrukcje dla Claude Code
├── README.md                      # Onboarding dla developerów
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## Konwencje nazewnictwa

| Element | Konwencja | Przykład |
|---------|-----------|---------|
| Komponenty React | PascalCase | `SessionCard.tsx` |
| Pliki utility / lib | camelCase | `storage.ts` |
| Foldery | kebab-case | `session-card/` |
| Typy TypeScript | PascalCase | `type Session = {...}` |
| Zmienne, funkcje | camelCase | `const createSession` |
| Stałe | UPPER_SNAKE | `MAX_FEATURES = 50` |
