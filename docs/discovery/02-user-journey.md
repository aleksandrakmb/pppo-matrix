# User Journey — PPO priorytetyzacja

## Data dokumentu
2026-06-25

---

## Główny scenariusz: "Sesja priorytetyzacji od zera"

### Krok 1 — Przygotowanie sesji
PPO tworzy nową sesję i nadaje jej nazwę (np. "Q3 2026 — backlog review").
Wprowadza listę feature'ów do oceny (ręcznie lub przez wklejenie listy).

**Pytania aplikacji:**
- "Jak nazywa się ta sesja?"
- "Dodaj feature'y do oceny"

---

### Krok 2 — Ocena Impact (PPO)
Dla każdego feature'a PPO ocenia wpływ na biznes / użytkownika.

**Skala:** 1–5 (lub Low / Medium / High — do ustalenia)

**Pytania prowadzące aplikacji:**
- "Jak bardzo ten feature wpłynie na satysfakcję użytkownika?"
- "Jak bardzo wpłynie na cele biznesowe?"

---

### Krok 3 — Ocena Effort (Deweloper / PPO)
Dla każdego feature'a wprowadzany jest szacowany effort.

**Skala:** 1–5 (lub T-shirt sizing: S/M/L/XL — do ustalenia)

**Źródło danych:** szacunki od deweloperów podane PPO przed/podczas sesji.

---

### Krok 4 — Wizualizacja matrycy
Aplikacja automatycznie generuje macierz Impact vs Effort (2x2 lub ciągłą).

**Quadranty:**
- 🏆 **Quick Wins** — wysoki impact, niski effort → robić pierwsze
- 💎 **Big Bets** — wysoki impact, wysoki effort → planować strategicznie
- 🗑️ **Time Sinks** — niski impact, wysoki effort → unikać
- 🌿 **Fill-ins** — niski impact, niski effort → robić jak jest czas

---

### Krok 5 — Analiza i eksport
PPO przegląda matrycę, może zmienić priorytety i wyeksportować wyniki.

---

## Alternatywny scenariusz: "Wróć do poprzedniej sesji"
PPO wraca do zapisanej sesji, może edytować oceny i zobaczyć zaktualizowaną matrycę.

---

## Pytania otwarte do rozstrzygnięcia

| # | Pytanie | Wpływ na design | Status |
|---|---------|-----------------|--------|
| 1 | Czy ocena jest indywidualna czy zespołowa? | Duży | ✅ Rozwiązane → ADR-002: dwie role, wybór przy wejściu, brak logowania |
| 2 | Czy aplikacja ma obsługiwać wiele projektów? | Średni | 🔵 V2 |
| 3 | Czy eksport to PDF, CSV, czy obraz? | Mały | 🔵 V2 |
| 4 | Czy impact i effort to liczby czy kategorie? | Średni | ⏳ Do ustalenia |

---

## Zaktualizowany flow z rolami (ADR-002)

### PPO tworzy sesję:
1. Wchodzi → wybiera rolę "PPO"
2. Tworzy sesję, dodaje feature'y
3. Ocenia Impact (1–5) dla każdego feature'a
4. Kopiuje link sesji → wysyła deweloperowi

### Developer wypełnia Effort:
1. Otwiera link → wybiera rolę "Developer"
2. Widzi listę feature'ów z wypełnionym Impact (read-only)
3. Wypełnia Effort (1–5) dla każdego feature'a

### PPO wraca po Effort:
1. Otwiera sesję → widzi macierz z obydwoma wartościami
