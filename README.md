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

`yarn build`

Each item can also be build independently

`yarn build:css`

`yarn build:js`

### Storybook

React components are documented with Storybook.

To run storybook locally:

`yarn storybook`

To access on Netlify:

https://ts-ui-storybook.netlify.com

Netlify makes our Storybook accessible without having to run it locally. Each PR runs a test deploy with a preview, and every merge to master automatically updates the Netlify site.

### Linters

All styles are linted using `sass-lint` and the config `.sass-lint.yml` is available to customize rules as needed.

The linter is also run automatically before publishing updates to npm. For full details see [the contributing guide](CONTRIBUTING.md).

To lint both css and js

`yarn lint`

To run the linters manually use:

`yarn lint:css`

`yarn lint:js`

#### Linter packages/ tooling

We are using [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript). This style guide provides a good amount of default linting rules that we can leverage to start with and then simply provide some overrides for our team

We have the option to work with a code editor like VSCode or via command line. For VSCode, you will have to install the [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) VSCode extension and for command line, you will have to install `prettier` globally as a dependency using `yarn` or `npm` (i.e. `yarn add -g prettier`)

If you have a different code editor like sublime or atom etc you can find a plugin to work with in the [editors](https://prettier.io/docs/en/editors.html) section of the docs

#### Linting with Prettier

If you would like to set up your VSCode editor to work with prettier for automatic formatting on save please set up the following settings by going to `Code > Preferences > Settings` and turning on the following...

<img width="746" alt="Screen Shot 2021-07-21 at 4 03 40 PM" src="https://user-images.githubusercontent.com/1371105/126553288-d41c2ce4-5194-4be1-8a61-cc8e80a0eac0.png">

---

<img width="810" alt="Screen Shot 2021-07-21 at 4 03 25 PM" src="https://user-images.githubusercontent.com/1371105/126553287-888fe030-0767-4cf3-b64b-dcf4570c357a.png">

#### Linting with Command line

To run prettier on command line, we are using a package called `git-format-staged`, which allows us to target ONLY git staged files. The necessary steps to run prettier on command line are below

- Install `prettier` globally `yarn add -g prettier` or `npm install -g prettier` on your machine in order for the following commands to work
- Ensure that any files you want linted and formatted are staged (on git). Remember we are using `git-format-staged`
- Run `yarn lint:format`

### Running unit tests

To run all the tests:

```
  yarn test
```

To run a single file:

```
  yarn test <myFile>
```

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
