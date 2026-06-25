# MVP Scope

## Data dokumentu
2026-06-25

## Status: DRAFT — wymaga walidacji

---

## Definicja MVP

Minimalna wersja, która daje realną wartość: PPO może samodzielnie przeprowadzić sesję priorytetyzacji i otrzymać macierz Impact vs Effort.

---

## IN SCOPE — MVP

### Sesje
- [ ] Tworzenie nowej sesji z nazwą
- [ ] Lista sesji (historia)
- [ ] Edycja sesji

### Feature'y
- [ ] Dodawanie feature'ów do sesji (ręcznie, jeden po jednym)
- [ ] Edycja i usuwanie feature'ów

### Ocenianie
- [ ] Ocena Impact dla każdego feature'a (skala 1–5)
- [ ] Ocena Effort dla każdego feature'a (skala 1–5)
- [ ] Prowadzony flow (aplikacja zadaje pytania po kolei)

### Wizualizacja
- [ ] Macierz 2x2 z naniesionymi feature'ami
- [ ] Kolorowanie według quadrantów
- [ ] Tooltip z nazwą feature'a po najechaniu

### Techniczne
- [ ] Dane zapisywane lokalnie (localStorage) — brak backendu na MVP
- [ ] Responsywność na desktop

---

## OUT OF SCOPE — MVP (następne wersje)

| Feature | Wersja | Uzasadnienie |
|---------|--------|--------------|
| Multi-user / współpraca w czasie rzeczywistym | v2 | Wymaga backendu i auth |
| Import z Jiry | v2 | Wymaga integracji API |
| Eksport PDF / CSV | v2 | Nice-to-have, nie blokuje wartości |
| Komentarze do feature'ów | v2 | Zwiększa złożoność |
| Powiadomienia / email | v3 | Wymaga backendu |
| Własna skala ocen | v2 | Najpierw waliduj z domyślną |

---

## Kryteria akceptacji MVP

1. PPO może stworzyć sesję i dodać minimum 5 feature'ów w < 5 minut
2. Każdy feature otrzymuje ocenę impact i effort
3. Macierz renderuje się poprawnie i feature'y są czytelnie rozmieszczone
4. Po odświeżeniu strony dane nie giną (localStorage)
5. Aplikacja działa na Chrome / Safari desktop

---

## Definition of Done dla pierwszego feature'a na produkcji

- Kod na GitHubie
- Aplikacja wdrożona (Vercel lub Netlify — do ustalenia)
- Przetestowana ręcznie przez PPO
- Brak krytycznych błędów w konsoli
