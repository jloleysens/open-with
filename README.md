## `open-with`

Open a link with a different browser while in some Chromium browser that can handle Chrome
extensions (e.g., Brave).

## The problem

Running multiple instances of Chromium with different Google profiles loaded. Certain emails contain
links that I would like to open in another Chromium instance.

## The solution

- Chrome extension that adds a new context menu item
- Server that gets called by the chrome extension and launches Google Chrome
- A launch command file that will start the server at log in (and disown the process so the terminal window can be closed).
