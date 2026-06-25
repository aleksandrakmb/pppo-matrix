# Plan implementacji — MVP

## Data: 2026-06-25

---

## Fazy

### Faza 0 — Setup (1 dzień)
**Cel: działająca aplikacja "hello world" na produkcji**

- [ ] `npx create-next-app` z TypeScript + Tailwind
- [ ] Instalacja shadcn/ui
- [ ] Deploy na Vercel (połączenie z GitHub)
- [ ] Własna domena lub vercel.app URL

✅ **Gotowe gdy:** otwierasz URL i widzisz stronę główną

---

### Faza 1 — Zarządzanie sesjami (2–3 dni)
**Cel: PPO może tworzyć i przeglądać sesje**

- [ ] Strona główna: lista sesji
- [ ] Formularz tworzenia sesji (nazwa)
- [ ] Persystencja w localStorage
- [ ] Usuwanie sesji
- [ ] Nawigacja między stronami

✅ **Gotowe gdy:** PPO tworzy sesję, odświeża stronę, sesja nadal istnieje

---

### Faza 2 — Feature'y (2–3 dni)
**Cel: PPO może dodawać feature'y do sesji**

- [ ] Strona sesji z listą feature'ów
- [ ] Formularz dodawania feature'a (nazwa + opcjonalny opis)
- [ ] Edycja i usuwanie feature'a
- [ ] Walidacja (puste pola, duplikaty)

✅ **Gotowe gdy:** PPO dodaje 5 feature'ów i widzi je na liście

---

### Faza 3 — Ocenianie (3–4 dni)
**Cel: prowadzony flow oceny impact i effort**

- [ ] Widok "scoring" — jeden feature na raz
- [ ] Slider lub przyciski 1–5 dla Impact
- [ ] Slider lub przyciski 1–5 dla Effort
- [ ] Pasek postępu (feature 3/10)
- [ ] Zapisywanie ocen na bieżąco
- [ ] Możliwość powrotu do poprzedniego feature'a

✅ **Gotowe gdy:** PPO ocenia 5 feature'ów w < 3 minuty

---

### Faza 4 — Macierz (3–4 dni)
**Cel: wizualizacja Impact vs Effort**

- [ ] Komponent matrycy (2x2 quadranty)
- [ ] Feature'y jako punkty/karty na matrycy
- [ ] Kolorowanie według quadrantów
- [ ] Etykiety quadrantów (Quick Wins, Big Bets, etc.)
- [ ] Tooltip z nazwą feature'a

✅ **Gotowe gdy:** PPO widzi macierz z poprawnie rozmieszczonymi feature'ami

---

### Faza 5 — Polish + produkcja (1–2 dni)
**Cel: aplikacja gotowa do użycia przez PPO**

- [ ] Responsywność (desktop first)
- [ ] Obsługa edge case'ów (pusta lista, brak ocen)
- [ ] Podstawowy onboarding (co robić na start)
- [ ] Testy ręczne pełnego flow
- [ ] Deploy finalnej wersji

✅ **Gotowe gdy:** PPO przeprowadza pełną sesję samodzielnie bez pomocy

---

## Kolejność priorytetów

```
Faza 0 → Faza 1 → Faza 2 → Faza 3 → Faza 4 → Faza 5
  Setup    Sesje    Features  Scoring   Matrix    Launch
```

Każda faza deployowana na Vercel — zawsze mamy coś działającego na produkcji.

---

## Szacowany czas łączny

~10–15 dni roboczych (zależy od tempa iteracji i feedbacku)
