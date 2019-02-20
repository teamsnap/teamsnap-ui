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
