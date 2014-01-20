Ember Repository Browser
==================

An Ember application for searching and visualizing GitHub repos (WIP).

This is mostly an experimentation ground for various features:

### Tooling

- [Mimosa](http://mimosa.io) as the dev and build tool
- RequireJS + ES6 modules via AMD
  - files are kept separate for development; rebuilds only what's necessary
  - almond.js for optimized build
- Module-aware resolver
  - no need to attach properties to the global `App` object
  - modules still need to be loaded up front so the resolver can `require` them synchronously

## Setup

```bash
$ npm install -g mimosa
$ cd ember-repo-browser
$ npm install
```

## Run the app

- `mimosa watch -s` (development)
- `mimosa watch -os` or `mimosa build` (optimized build)

Launch app at `http://localhost:3000/`.

## Testing (WIP)

- Test runner: `public/runner.html`
- Need integration with testem
