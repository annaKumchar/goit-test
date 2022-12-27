**Read in other languages: [Українська](README.md), [Polska](README.pl.md),
[English](README.en.md).**

Projekt powstał w celu odtworzenia sytuacji, w której użytkownik subskrybuje/wypisuje się z określonego profilu.
W projekcie, zgodnie z zakresem zadań, zrealizowano:
1. Karta użytkownika (układ jest ustalony w px, semantyczny i ważny.).
2. Po kliknięciu przycisku Obserwuj, jego tekst zmienia się na Śledzenie. Także
zmienia się kolor przycisku. A do liczby obserwujących dodaje się 1. Oznacza to, że
początkowa liczba to 100 500 obserwujących. Kiedy klikniesz na przycisk, będzie
100501.
3. Podczas aktualizacji strony rejestrowany jest końcowy rezultat działań użytkownika. To jest,
jeśli klikniesz przycisk i odświeżysz stronę, przycisk pozostanie taki sam
w stanie Follow z odpowiednim kolorem, podczas gdy liczba obserwujących nie
spada do wartości początkowej.
4. Po ponownym kliknięciu przycisku jego tekst i kolor zmienią się na oryginalne
państwo Zmienia się też liczba obserwujących. Zmniejsza się o 1
(100 500).
5. W kodzie liczba 100 500 jest zapisywana z jedną wartością (100500). W interfejsie użytkownika —
rozdzielane przecinkami (100 500).

W realizacji projektu wykorzystano:
- Java Script;
- React;
- Node.js;
- Github;
- Git;
- PropTypes;
- Styled-Components;