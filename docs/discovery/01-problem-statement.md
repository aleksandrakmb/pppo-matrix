# Problem Statement

## Data dokumentu
2026-06-25

## Autor
Aleksandra K. (PPO)

---

## Problem

PPO w zespołach produktowych potrzebują narzędzia do wspólnej priorytetyzacji feature'ów razem z deweloperami. Obecnie proces przebiega manualnie w Miro lub Figma/FigJam, co oznacza:

- Brak struktury — każdy sesja wygląda inaczej
- Brak persystencji — wyniki giną po zamknięciu tablicy lub wymagają ręcznego archiwizowania
- Brak prowadzenia — użytkownik musi wiedzieć jak przeprowadzić sesję, narzędzie nie zadaje pytań
- Brak łatwej analizy — trudno porównywać wyniki między sesjami

## Grupy użytkowników

### Główna: PPO (Proxy Product Owner)
- Prowadzi sesję priorytetyzacji
- Wprowadza lub importuje listę feature'ów
- Ocenia impact (wartość biznesowa / użytkownicza)
- Prezentuje matrycę zespołowi i klientowi

### Pomocnicza: Developer / Tech Lead
- Szacuje effort (złożoność techniczna, czas)
- Może uczestniczyć w sesji jako współoceniający

## Kontekst użycia

Sesja priorytetyzacji odbywa się:
- Na początku sprintu lub kwartału
- Po zebraniu wymagań od klienta
- Kiedy backlog urósł i trzeba zdecydować co robić najpierw

## Cel biznesowy

Skrócić czas przygotowania i przeprowadzenia sesji priorytetyzacji z ~2h (Miro + manuale) do ~30 min (ustrukturyzowany flow w aplikacji).

---

## Hipoteza wartości

> Jeśli damy PPO narzędzie, które przeprowadzi ich przez ocenę impact i effort oraz automatycznie wizualizuje matrycę — zaoszczędzimy czas i zwiększymy jakość decyzji priorytetyzacyjnych.

---

## Co NIE jest problemem (out of scope na MVP)

- Zarządzanie całym backlogiem (to robi Jira)
- Estymowanie w story points (to robi planning poker)
- Raportowanie dla stakeholderów (to osobna funkcja)
