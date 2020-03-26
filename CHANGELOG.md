# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security`

## [3.6.0] - 2020-03-26
- https://github.com/teamsnap/teamsnap-ui/pull/267
- `Added` aria roles for table

## [3.15.0] - 2020-03-17
- https://github.com/teamsnap/teamsnap-ui/pull/269
- `Added` orange as a color for the progress bar

## [3.4.1] - 2020-02-20
- https://github.com/teamsnap/teamsnap-ui/pull/265

### Fixed
- `Fixed` the function definition for paginated table's mapDataToRow callback

## [3.4.0] - 2020-02-20
- https://github.com/teamsnap/teamsnap-ui/pull/263

### Added
- `Added` a component for an opinionated pagination-based table

## [3.3.2] - 2020-02-12
- https://github.com/teamsnap/teamsnap-ui/pull/261
- https://github.com/teamsnap/teamsnap-ui/pull/260

### Fixed
- Updated gulp config to stop CSS Nano from altering z-index values in the compile

### Added
- New icons

## [3.3.1] - 2020-01-28
- https://github.com/teamsnap/teamsnap-ui/pull/257

### Fixed
- `Fixed` Providing nonexistent default sort columns caused table component to fail to render (and throw exceptions)

## [3.3.0] - 2019-12-05
- https://github.com/teamsnap/teamsnap-ui/pull/208
- https://github.com/teamsnap/teamsnap-ui/pull/206

### Fixed
- `Fixed` A bug that prevented theme configs for loading properly.

### Added
- `Added` Support for TypeScript props via `PropTypes.InferProps`

## [3.2.2] - 2019-12-04
- https://github.com/teamsnap/teamsnap-ui/pull/204

### Changed

- `Changed` Table Component's Prop Types so that the Column object's label field properly supports JSX.

## [3.2.1] - 2019-09-11

- https://github.com/teamsnap/teamsnap-ui/pull/164

### Changed

- `Changed` Popupactions to support react elements as well as strings for body content.
- `Changed` Popupactions to support required confirmation from users

## [3.2.0] - 2019-09-10

- https://github.com/teamsnap/teamsnap-ui/pull/162

### Changed

- `Added` Components for Popup buttons

## [3.1.0] - 2019-09-09

- https://github.com/teamsnap/teamsnap-ui/pull/154
- https://github.com/teamsnap/teamsnap-ui/pull/155

### Changed

- `Added` CSS & HTML for modals
- `Security` Refactored theme variables for direct import
- `Added` Utilities more for colors and borders

## [3.0.0] - 2019-09-04

- https://github.com/teamsnap/teamsnap-ui/pull/130

### Changed

- `Added` support for TypeScript
- `Security` fixes for downstream dependencies.

## [2.17.1] - 2019-06-11

- https://github.com/teamsnap/teamsnap-ui/pull/120

### Changed

- `Added` assorted CSS utilites (see PR)
- `Updated` CSS/design for Checkbox, Input and SelectBox
- `Updated` StepNav to add xs modifier and support for numbers

## [2.16.1] - 2019-06-05

- https://github.com/teamsnap/teamsnap-ui/pull/124

### Changed

- `Added` panel header image to react component
- `Added` panel stories to storybook
- `Updated` Panel-image class to be a part of Panel-header

## [2.15.1] - 2019-05-21

- https://github.com/teamsnap/teamsnap-ui/pull/119

### Changed

- `Added` daypicker styles
- `Added` u-linkCascade class

## [2.15.0] - 2019-05-16

- https://github.com/teamsnap/teamsnap-ui/pull/116
- https://github.com/teamsnap/teamsnap-ui/pull/118

### Changed

- `Added` background color utilities
- `Added` initial styles for React datepicker component (WIP)

## [2.14.1] - 2019-05-01

- https://github.com/teamsnap/teamsnap-ui/pull/112

### Changed

- `Added` focus and focus-within state to Popup--hover modifier
- `Added` table knobs to storybook

## [2.14.0] - 2019-04-29

- https://github.com/teamsnap/teamsnap-ui/pull/105
- https://github.com/teamsnap/teamsnap-ui/pull/111
- https://github.com/teamsnap/teamsnap-ui/pull/108

### Changed

- `Added` story book to view our React Components
- `Added` an empty and loading state to the React table component
- `Added` more text and grid utilities to the CSS
- `Added` a hover modifier to the Popup CSS
- `Added` a row header (sub-header) and image to Panel CSS

## [2.13.6] - 2019-02-19

https://github.com/teamsnap/teamsnap-ui/pull/103

### Changed

- got rid of duplicate CSS and bumping version with "npm version" instead of manually

## [2.13.5] - 2019-02-19

https://github.com/teamsnap/teamsnap-ui/pull/102

### Changed

- Specifying font-size, font-weight, and white-space, to make tooltip more flexible

## [2.13.4] - 2018-09-13

https://github.com/teamsnap/teamsnap-ui/pull/100

### Changed

- Change SummaryList to accept a `node` instead of just a `string`
- Allow SummaryList to accept `hasBorder` option to remove borders

## [2.13.2] - 2018-07-30

https://github.com/teamsnap/teamsnap-ui/pull/97

### Changed

- Change label to accept a `node` instead of just a `string`

## v2.13.1 - 2018-07-26

https://github.com/teamsnap/teamsnap-ui/pull/98

### Changed

- Update font path to use just `https` since `//` wasn't working on all `https` sites

## [2.12.0] - 2018-06-15

https://github.com/teamsnap/teamsnap-ui/pull/95

### Changed

- Change font path to just `//` so they can work for http and https

## [2.11.0] - 2018-06-12

https://github.com/teamsnap/teamsnap-ui/pull/94

### Added

- Add `large` modifiers for `.Input` and `.SelectBox`
- Increase font size for `.Button--large`

## [2.10.0] - 2018-06-06

https://github.com/teamsnap/teamsnap-ui/pull/93

### Fixed

- Fix Table component state to update when props change.

### Added

- Add `maxTableHeight` prop to Table component.

## [2.9.0] - 2018-05-31

https://github.com/teamsnap/teamsnap-ui/pull/88

### Changed

- Change font paths in CSS `@font-face` declarations from relative to absolute. These now reference a fixed location of the fonts on the dugout CDN (http://dugout.teamsnap.com/teamsnap-ui/2.5.1/assets/fonts/...), which makes TeamSnap UI self-contained and more flexible for use in a variety of projects. A version number of TeamSnap UI was somewhat randomly picked because the fonts are versioned along with everything else, but they won't actually change unless we change our font stack.

## [2.8.1] - 2018-05-30

https://github.com/teamsnap/teamsnap-ui/pull/89

### Fixed

- Updated package-lock.json to include the version number.

## [2.8.0] - 2018-05-30

https://github.com/teamsnap/teamsnap-ui/pull/86

### Added

- Add textarea to styles `.FieldGroup` error states so that it gets a red border if it's not valid.

## [2.7.2] - 2018-05-11

https://github.com/teamsnap/teamsnap-ui/pull/85

### Changed

- Add `src` to files entry for distribution.
- Update `prepublish` task to `prepublishOnly`
