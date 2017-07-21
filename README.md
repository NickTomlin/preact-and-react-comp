react / preact
---

This is a toy application that uses the react tutorial to showcase preact/react.

```
npm i

# start webpack dev servers at 8080 (preact) and 8081 (react)
npm start

# start just the preact server
npm run preact

# start just the react server
npm run react
```

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

Performance
---

todo ([some analysis here](https://github.com/developit/preact-perf]))
