# teamsnap-ui
TeamSnaps UI framework. Built with sass and react.

### Installation

Installs the @teamsnap/teamsnap-ui node module and builds the dist directory.

```
npm install
```

To build the dist folder for css, js and icons 

`npm run build`

Each item can also be build independently 

`npm run build:css`

`npm run build:js`


All styles are linted using `sass-lint` and the config `.sass-lint.yml` is available to customize rules as needed.

The linter is also run automatically before publishing updates to npm. For full details see [the contributing guide](CONTRIBUTING.md).

To lint both css and js

`npm run lint`

To run the linters manually use:

`npm run lint:css`

`npm run lint:js`


### TODO:
+ Update docs with full process for working locally with TeamSnap-UI
+ Update scripts to use webpack for css management and serving locally
+ Update docs to be written in storybook
