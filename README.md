# teamsnap-ui
TeamSnap CSS component framework.

### To install as a node module

Installs the @teamsnap/teamsnap-ui node module and builds the dist directory.

```
npm install
```

### To pull down the repository and work locally

```
git clone git@github.com:teamsnap/teamsnap-ui.git
```

+ To build dist, start up the server and watch files:

`npm start` or `gulp`


+ To also build themes while working locally (this takes longer, so it is not built in to the main task):

```
gulp --themes
```

+ All styles are linted using `sass-lint` and the config `sass-lint.yml` is available to customize rules as needed.

The linter is also run automatically before publishing updates to npm. For full details see [the contributing guide](CONTRIBUTING.md).

To run the linter manually use:

```
npm run lint
```

### TODO:

+ Update lint file and add to main gulp task
+ Update docs with full process for working with TeamSnap-UI
