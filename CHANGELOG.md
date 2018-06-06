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

## [2.10.0] - 2018-06-06
https://github.com/teamsnap/teamsnap-ui/pull/93
### Fixed
- Fix Table component state to update when props change.
### Added
- Add `maxTableHeight` prop to Table component.


## [2.9.0] - 2018-05-31
https://github.com/teamsnap/teamsnap-ui/pull/88
### Changed
- Change font paths in CSS `@font-face` declarations from relative to absolute. These now reference a fixed location of the fonts on the dugout CDN (http://dugout.teamsnap.com/teamsnap-ui/2.5.1/assets/fonts/...), which makes TeamSnap UI self-contained and more flexible for use in a variety of projects.  A version number of TeamSnap UI was somewhat randomly picked because the fonts are versioned along with everything else, but they won't actually change unless we change our font stack.


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
