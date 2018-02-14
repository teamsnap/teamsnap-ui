# teamsnap-ui
TeamSnap CSS component framework.

### Installation

```
npm install
```

### Development

+ To run all initial tasks and start up the server:

```
gulp
```

+ To run the server and watch local files for changes:

```
gulp --dev
```

+ To also build themes while working locally (this takes longer, so it is not built in to the main task):

```
gulp --dev --themes
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
