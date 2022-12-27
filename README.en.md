**Read in other languages: [Українська](README.md), [Polska](README.pl.md),
[English](README.en.md).**

The project was created to reproduce the situation when a user subscribes/unsubscribes to a certain profile.
In accordance with the technical task, the project implemented:
1. User card (The layout is fixed in px, semantic and valid.).
2. After clicking the "Subscribe" button, its text changes to "Subscribe". Also
the color of the button changes. And 1 is added to the number of subscribers. That is,
the initial number is 100,500 subscribers. When you click on the button, it will
100,501.
3. When updating the page, the final result of the user's actions must be recorded. That is,
if you click on the button and refresh the page, the button will remain unchanged
is in the Following state with a matching color, while the follower count is not
decreases to the initial value.
4. When you click the button again, its text and color change to the original
the number of followers also changes. Decreases by 1
(100,500).
5. In the code, the number 100500 is written as one value (100500). In the user interface -
separated by commas (100,500).

During the implementation of the project, the following were used:
- Java Script;
- React;
- Node.js;
- Github;
- Git;
- PropTypes;
- Styled-Components;