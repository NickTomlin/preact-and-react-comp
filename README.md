react / preact
---

This is a toy application that uses the react tutorial to showcase preact/react.

Api
---

Essentially the same. I do some hackery to allow using both in [game.js](game.js), but preact is compatible with react. Introducing preact-compat means that you can use react packages from a preact application.

Size
---

```
$ du -sh dist/*.bundle.js
 16K    dist/preact.bundle.js
164K    dist/react.bundle.js
```
