# teamsnap-ui
TeamSnap CSS component framework.

### Installation

```
npm install
```

Once installed styles can be applied and composed via [css modules](http://)


```
.CustomButton {
  composes: Button Button--primary from 'teamsnap-ui/src/components/button.scss';
  ... custom styles
}
```

### Development

All styles are linted using `sass-lint` and the config `sass-lint.yml` is available to customize rules as needed.
The linter is also run automatically before publishing updates to npm. For full details see [the contributing guide](CONTRIBUTING.md).

To run the linter manually use:

```
npm run lint
```
