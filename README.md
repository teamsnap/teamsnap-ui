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
- [ ] Modal (pr in progress) <a href="https://teamsnap.atlassian.net/browse/TUI-12">TUI-12</a>
- [ ] Badges <a href="https://teamsnap.atlassian.net/browse/TUI-14">TUI-14</a>
- [ ] Member Photos / Placeholders <a href="https://teamsnap.atlassian.net/browse/TUI-15">TUI-15</a>
- [ ] Breadcrumbs <a href="https://teamsnap.atlassian.net/browse/TUI-16">TUI-16</a>
- [ ] Card (2 photo variants) <a href="https://teamsnap.atlassian.net/browse/TUI-17">TUI-17</a>
- [ ] Type ahead <a href="https://teamsnap.atlassian.net/browse/TUI-18">TUI-18</a>
- [ ] Counts <a href="https://teamsnap.atlassian.net/browse/TUI-19">TUI-19</a>
- [ ] Drop area <a href="https://teamsnap.atlassian.net/browse/TUI-20">TUI-20</a>
- [ ] Calendar <a href="https://teamsnap.atlassian.net/browse/TUI-1">TUI-1</a>
- [ ] Primary Navigation (top and side) <a href="https://teamsnap.atlassian.net/browse/TUI-21">TUI-21</a>
- [ ] Side Tabs Variant (manage my teams & snapboard getting started) <a href="https://teamsnap.atlassian.net/browse/TUI-22">TUI-22</a>
- [ ] Dropdown Menu <a href="https://teamsnap.atlassian.net/browse/TUI-23">TUI-23</a>
- [ ] Background utilities <a href="https://teamsnap.atlassian.net/browse/TUI-24">TUI-24</a>
- [ ] Finish adding icons <a href="https://teamsnap.atlassian.net/browse/TUI-25">TUI-25</a>
- [ ] Pagination <a href="https://teamsnap.atlassian.net/browse/TUI-26">TUI-26</a>
- [ ] Vertical step nav <a href="https://teamsnap.atlassian.net/browse/TUI-27">TUI-27</a>

### Missing CSS Documentation
- [ ] More Panel Documentation <a href="https://teamsnap.atlassian.net/browse/TUI-28">TUI-28</a>
- [ ] Theming/Variable Documentation <a href="https://teamsnap.atlassian.net/browse/TUI-29">TUI-29</a>
- [ ] Spacing Documentation <a href="https://teamsnap.atlassian.net/browse/TUI-30">TUI-30</a>
- [ ] Color documentation <a href="https://teamsnap.atlassian.net/browse/TUI-32">TUI-31</a>
- [ ] Typography documentation <a href="https://teamsnap.atlassian.net/browse/TUI-33">TUI-33</a>

### Missing React Component List
- [ ] Feedback <a href="https://teamsnap.atlassian.net/browse/TUI-34">TUI-34</a>
- [ ] Popup <a href="https://teamsnap.atlassian.net/browse/TUI-33">TUI-33</a>
- [ ] Modal <a href="https://teamsnap.atlassian.net/browse/TUI-12">TUI-12</a>
- [ ] Tab <a href="https://teamsnap.atlassian.net/browse/TUI-35">TUI-35</a>
