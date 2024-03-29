# teamsnap-ui

TeamSnaps UI framework. Built with sass and react.

![CI](https://github.com/teamsnap/teamsnap-ui/workflows/CI/badge.svg)


### To run locally:

Make sure you using the [correct version of node](./.nvmrc).

```
nvm use
```

Install dependencies:

```
yarn
```

To build the dist folder for css, js and icons

`yarn run build`

Each item can also be build independently

`yarn run build:css`

`yarn run build:js`

### Storybook

React components are documented with Storybook.

To run storybook locally:

`yarn run storybook`

To access on Netlify:

https://ts-ui-storybook.netlify.com

Netlify makes our Storybook accessible without having to run it locally. Each PR runs a test deploy with a preview, and every merge to main automatically updates the Netlify site.


### Linters

All styles are linted using `sass-lint` and the config `.sass-lint.yml` is available to customize rules as needed.

The linter is also run automatically before publishing updates to npm. For full details see [the contributing guide](CONTRIBUTING.md).

To lint both css and js

`yarn run lint`

To run the linters manually use:

`yarn run lint:css`

`yarn run lint:js`

### TODO:

- Update docs with full process for working locally with TeamSnap-UI
- Update scripts to use webpack for css management and serving locally



### CSS Components

https://teamsnap-ui-patterns.netlify.com/

| Finished | CSS Component | React Component      | Storybook |
| -------- | ------------- | -------------------- | --------- |
| x        | Button        | Button               | x         |
| x        | Button Group  | Button Group         | x         |
| x        | Checkbox      | Checkbox Radio       | x         |
|          | Divider       | Divider              | x         |
|          | Feedback      |                      |           |
|          | Field Group   | Field Group          |           |
|          |               | Field Label          |           |
|          |               | Field Message        |           |
|          |               | Field Wrapper        |           |
|          | Grid          | Grid Cell            |           |
| x        | Icon          | Icon                 | x         |
|          | Input Group   | Input                |           |
|          |               | Input Control        |           |
|          | Input         | Input Text Area      |           |
|          | Loader        | Loader               |           |
| x        | Panel         | Panel                | x         |
|          |               | Panel Body           | x         |
|          |               | Panel Cell           | x         |
|          |               | Panel Header         | x         |
|          |               | Panel Row            |           |
|          |               | Panel Row Expandable |           |
|          | Popup         |                      |           |
| x        | Progress      | Progress             | x         |
|          | Select Box    | Select               | x         |
|          | Step Nav      | Step Nav             | x         |
|          | Summary List  | Summary List         |           |
|          | Table         | Table                | x         |
|          | Tabs          |                      |           |
|          |               | Text Link            |           |
|          | Toggle        | Toggle               | x         |
|          | Tooltip       | Tooltip              |           |
|          | Pagination    | Pagination           |

### Missing CSS Component List

- [ ] Modal (pr in progress)
- [ ] Badges
- [ ] Member Photos / Placeholders
- [ ] Breadcrumbs
- [ ] Card (2 photo variants)
- [ ] Type ahead
- [ ] Counts
- [ ] Drop area
- [ ] Calendar
- [ ] Primary Navigation (top and side)
- [ ] Side Tabs Variant (manage my teams & snapboard getting started)
- [ ] Dropdown Menu
- [ ] Background utilities
- [ ] Finish adding icons
- [ ] Pagination
- [ ] Miller menu and Tree menu (maybe)
- [ ] Vertical step nav
- [ ] Shadow for components
- [ ] Dynamic Spacing
- [ ] Blockquote
- [ ] Triangle pseudo class for callouts/flyouts

### Missing CSS Documentation

- [ ] More Panel Documentation
- [ ] Theming/Variable Documentation
- [ ] Spacing Documentation
- [ ] Color documentation
- [ ] Typography documentation
- [ ] Better Grid documentation with sizes
- [ ] Pagination

### Missing React Component List

- [ ] Feedback
- [ ] Popup
- [ ] Modal
- [ ] Tab
- [ ] Input Show Hide
- [ ] Pagination
