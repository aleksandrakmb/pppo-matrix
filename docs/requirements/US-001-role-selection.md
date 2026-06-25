# US-001: Wybór roli przy wejściu

## Data: 2026-06-25
## Status: READY FOR DEV

---

## User Story

**Jako** użytkownik wchodzący do aplikacji,  
**chcę** wybrać czy jestem PPO czy Developerem,  
**po to żeby** aplikacja wiedziała jakie akcje mi pokazać (Impact vs Effort).

---

## Acceptance Criteria

### AC-1: Ekran powitalny
- [ ] Po wejściu na `/` widoczny jest ekran z nazwą aplikacji ("PPO Matrix") i hasłem roboczym
- [ ] Na ekranie są dwie duże karty do kliknięcia: **PPO** i **Developer**
- [ ] Każda karta ma nazwę roli i krótki opis co ta rola robi w aplikacji

### AC-2: Treść kart
- [ ] Karta PPO: tytuł "PPO", opis "Tworzę sesje i oceniam Impact feature'ów"
- [ ] Karta Developer: tytuł "Developer", opis "Oceniam Effort — czas i złożoność feature'ów"

### AC-3: Zachowanie po kliknięciu
- [ ] Kliknięcie PPO → rola zapisana w sessionStorage → przekierowanie na `/sessions`
- [ ] Kliknięcie Developer → rola zapisana w sessionStorage → przekierowanie na `/sessions`
- [ ] Strona `/sessions` to na razie placeholder z tekstem "Lista sesji — wkrótce" i info o wybranej roli

### AC-4: Persystencja roli w sesji
- [ ] Jeśli rola jest już zapisana w sessionStorage → ekran powitalny jest pomijany, użytkownik trafia od razu na `/sessions`
- [ ] Po zamknięciu i otwarciu nowej karty → ekran powitalny pojawia się ponownie (sessionStorage nie przeżywa nowej karty)

### AC-5: Responsywność
- [ ] Na desktop (≥1024px): dwie karty obok siebie
- [ ] Na mobile (<1024px): dwie karty jedna pod drugą

---

## Design

**Layout:** pełnoekranowy, wycentrowany, jasne tło  
**Karty:** duże (min. 200px wysokości), hover effect, wyraźny cursor pointer  
**Typografia:** nazwa aplikacji duża na górze, opis roli mniejszy wewnątrz karty  
**Kolory:** robocze — do ustalenia przy brandingu, na razie neutral z akcentem

---

## Out of scope dla tego US

- Zmiana roli po wyborze (v2)
- Animacje przejścia (v2)
- Prawdziwa lista sesji (US-002)

---

## Pliki do stworzenia

```
src/app/page.tsx              ← ekran powitalny (role selection)
src/app/sessions/page.tsx     ← placeholder listy sesji
src/lib/storage.ts            ← funkcje sessionStorage (getRole, setRole)
src/types/index.ts            ← typ UserRole
```
