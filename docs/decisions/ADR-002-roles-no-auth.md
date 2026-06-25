# ADR-002: Role bez autentykacji

## Data: 2026-06-25
## Status: ACCEPTED

---

## Kontekst

Aplikacja ma dwóch typów użytkowników: PPO (ocenia Impact) i Developer (ocenia Effort). Pytanie: czy potrzebujemy kont, logowania, śledzenia tożsamości?

## Decyzja

**Brak autentykacji. Rola wybierana jednorazowo przy wejściu.**

Flow:
1. Użytkownik otwiera aplikację (lub link do sesji)
2. Ekran powitalny pyta: "Kim jesteś?" → [PPO] [Developer]
3. Wybór roli zapisywany w sessionStorage (nie localStorage — reset przy nowej karcie)
4. PPO widzi i wypełnia kolumnę Impact
5. Developer widzi i wypełnia kolumnę Effort
6. PPO udostępnia link do sesji deweloperowi (URL z ID sesji)

## Uzasadnienie

- Zerowa złożoność backendu — brak kont = brak bazy użytkowników, brak tokenów
- Wystarczające dla use case'u: PPO i Developer pracują w tym samym kontekście projektowym i ufają sobie
- Rola nie musi być trwała — przy kolejnym wejściu można wybrać inną rolę

## Konsekwencje

✅ MVP zostaje single-page, localStorage, zero backendu  
✅ Udostępnianie sesji = wysłanie linka (prosty UX)  
⚠️ Brak weryfikacji kto co wypełnił (akceptowalne na MVP)  
⚠️ Jeśli PPO i Developer otworzą tę samą sesję w tym samym czasie na różnych urządzeniach — nie zobaczą nawzajem swoich zmian w czasie rzeczywistym (localStorage nie synchronizuje między urządzeniami)

## Ograniczenie do rozwiązania w v2

Przy współpracy zdalnej (PPO i Developer na różnych komputerach) potrzebny będzie backend z real-time sync (np. Supabase Realtime). Na MVP zakładamy, że sesja jest wypełniana sekwencyjnie: najpierw PPO, potem Developer (lub na jednym urządzeniu).

## Zatwierdzone przez: Aleksandra K.
