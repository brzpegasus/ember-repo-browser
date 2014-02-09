# ember-repo-browser

> An Ember application for searching and visualizing GitHub repos (WIP).

_This is mostly an experimentation ground for various features._

- [Mimosa](http://mimosa.io) as the dev and build tool
- RequireJS + ES6 modules via transpilation to AMD
  - files are kept separate for development; rebuilds only what's necessary
  - almond.js for optimized build
- Module-aware resolver
  - no need to attach properties to the Application namespace
  - dependencies are managed by [mimosa-dependency-bundler](https://github.com/brzpegasus/mimosa-dependency-bundler)

## Setup

Install [Mimosa](https://github.com/dbashford/mimosa):

```
npm install -g mimosa
```

## Run the App

- `mimosa watch -s` (development)
- `mimosa watch -os` or `mimosa build` (optimized build)

Launch app at `http://localhost:3000/`.

## Run Tests

Install [Testem](https://github.com/airportyh/testem):

```bash
npm install -g testem
```

- `testem` (runs tests in development mode)
- `testem ci` (runs tests in continuous integration mode)
