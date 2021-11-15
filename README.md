# Repro for a chrome bug

https://bugs.chromium.org/p/chromium/issues/detail?id=1269602

## Steps to reproduce:

- run `node test.js`
- open chrome to `http://localhost:9999`
- See `Hello, world!`
- See that `200` is printed in the node.js console
- Open the "Network tab of the developer tools" and uncheck the "Disable cache" checkbox
- Press F5 to reload the page
- See that `304` is printed in the node.js console
- See that chrome still shows `200` in the `Network tab`

Expected: Chrome dev tools should show 304 indicating that it fetched the resource from the cache