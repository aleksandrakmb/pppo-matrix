# Model danych — MVP

## Data: 2026-06-25

---

## Encje

### Session (Sesja)

```typescript
type Session = {
  id: string           // uuid
  name: string         // np. "Q3 2026 — backlog review"
  createdAt: string    // ISO date
  updatedAt: string    // ISO date
  features: Feature[]
}
```

### Feature (Funkcjonalność)

```typescript
type Feature = {
  id: string           // uuid
  name: string         // np. "Dark mode"
  description?: string // opcjonalny opis
  impact: number | null  // 1–5, null = nieoceniony
  effort: number | null  // 1–5, null = nieoceniony
}
```

### Quadrant (obliczany, nie zapisywany)

```typescript
type Quadrant = 'quick-win' | 'big-bet' | 'time-sink' | 'fill-in'

// Logika przypisania (próg = 3):
// impact >= 3 && effort < 3  → quick-win
// impact >= 3 && effort >= 3 → big-bet
// impact < 3  && effort >= 3 → time-sink
// impact < 3  && effort < 3  → fill-in
```

---

## Rola użytkownika (sessionStorage)

```typescript
type UserRole = 'ppo' | 'developer'

// Klucz: "ppo-matrix-role"
// Zapisywane w sessionStorage (reset przy nowej karcie — celowo)
```

---

## Przechowywanie (localStorage)

```
localStorage key: "ppo-matrix-sessions"
value: JSON.stringify(Session[])
```

---

## Pytania otwarte

- Czy próg podziału na quadranty ma być stały (2.5) czy konfigurowalny przez użytkownika?
- Czy chcemy wersjonowanie sesji (historia zmian ocen)?
