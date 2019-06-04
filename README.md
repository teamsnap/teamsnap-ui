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

### Storybook

React components are documented with Storybook.

https://teamsnap-ui-storybook.netlify.com

Netlify makes our Storybook accessible without having to run it locally. Each PR runs a test deploy with a preview, and every merge to master automatically updates the Netlify site.

To run storybook locally:

`npm run storybook`



### CSS Components
https://teamsnap-ui-patterns.netlify.com/

| Finished | CSS Component | React Component                                                         |
|----------|---------------|-------------------------------------------------------------------------|
|          | Button        | Button                                                                  |
|          | Button Group  | Button Group                                                            |
|          | Checkbox      | Checkbox Radio                                                          |
|          | Divider       | Divider                                                                 |
|          | Feedback      |                                                                         |
|          | Field Group   | Field Group                                                             |
|          |               | Field Label                                                             |
|          |               | Field Message                                                           |
|          |               | Field Wrapper                                                           |
|          | Grid          | Grid Cell                                                               |
|          | Icon          | Icon                                                                    |
|          | Input Group   | Input                                                                   |
|          |               | Input Control                                                           |
|          | Input         | Input Text Area                                                         |
|          | Loader        | Loader                                                                  |
|          | Panel         | Panel 
|          |               | Panel Body |
|          |               | Panel Cell  |
|          |               | Panel Header | 
|          |               | Panel Row |
|          |               | Panel Row Expandable |
|          | Popup         |                                                                         |
|          | Progress      | Progress                                                                |
|          | Select Box    | Select                                                                  |
|          | Step Nav      | Step Nav                                                                |
|          | Summary List  | Summary List                                                            |
|          | Table         | Table                                                                   |
|          | Tabs          |                                                                         |
|          |               | Text Link                                                               |
|          | Toggle        | Toggle                                                                  |
|          | Tooltip       | Tooltip                                                                 |
|          |               |                                                                         |



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

### Missing React Component List
- [ ] Feedback
- [ ] Popup
- [ ] Modal
- [ ] Tab
