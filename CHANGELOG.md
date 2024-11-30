# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

# [1.6.0] - 2024-11-30

### Added
- Added posibility to set `site.Copyright` in configuration. ([#187](https://github.com/chrede88/qubt/pull/187))

### Fixed
- Changed the assets fingerprint to sha256. Fixes a filename issue on Linux. ([#186](https://github.com/chrede88/qubt/pull/186))

### Hugo
- Bumped to v0.139.3

# [1.5.0] - 2024-11-06

### Added
- Added icons for `ssh-key` and `certificates`.

### Hugo
- Bumped to v0.138.0

# [1.4.0] - 2024-10-26

### Added
- Added support for Table of Content for blog posts.
  Set `toc: true` in frontmatter to display the Table of Content.

- Added default `ai.txt`. The default is to disallow LLM training on anything.
  Change this by adding a `./static/ai.txt` file to your repo.

### Hugo
- Bumped to v0.136.5

# [1.3.2] - 2024-10-16

### Fixed
- Author images are now again shown in the blog preview cards.

### Hugo
- Bumped to v0.136.1

### Go
- Bumped to v1.23.2

# [1.3.1] - 2024-05-18

### Fixed
- Fixed an lighthouse accessibility issue

# [1.3.0] - 2024-05-17

### Added
- Light/dark theme switcher

### Hugo
- Support for Hugo v0.126.1

### Go
- Support for Go v1.22.3

# [1.2.10] - 2024-04-14

### Changed
- Example site author photo

# [1.2.9] - 2024-04-11

### Fixed
- Fixed wrong generator in head.

### Hugo
- Support for Hugo v0.124.1

### Go
- Support for Go v1.22.2

# [1.2.8] - 2024-03-19

### Hugo
- Support for Hugo v0.124.0

### Go
- Support for Go v1.22.1

# [1.2.7] - 2024-02-18

### Fixed
- Fixed issue where assets wouldn't be picked up unless placed in the top level folder

### Go
- Support for Go v1.22.0

# [1.2.6] - 2024-01-26

### Hugo
- Support for Hugo v0.122.0

# [1.2.5] - 2024-01-21

### Changed
- Fixed issue where `pre` blocks would overflow the set max width.
- Fixed issue where blog card headlines would overflow.
- Changed how content on the homepage is aligned.

### Go
- Added support for go v1.21.6

# [1.2.4] - 2024-01-06

### Hugo
- Support for Hugo v0.121.2

# [1.2.3] - 2023-12-25

### Fixed
- feature image processing

### Changed
- increased processed image qualiaty

## [1.2.2] - 2023-12-23

### Changed
- updating Bluesky icon

## [1.2.1] - 2023-12-18

### Changed
- fixing 404 on mobile

## [1.2.0] - 2023-12-14

### Added
- custom 404 page

## [1.1.2] - 2023-12-05

### Changed
- Blog list headline font size made smaller on mobile, to accommodate longer headlines.

### Hugo
- Support for Hugo v0.121.1

## [1.1.1] - 2023-12-05

### Hugo
- Support for Hugo v0.121.0

## [1.1.0] - 2023-12-03

### Added
- New figure array shortcode:zap:

## [1.0.1] - 2023-11-25

### Changed
- Small CSS changes, in order to improve lighthouse score.

## [1.0.0] - 2023-11-25
- Initial release

[unreleased]: https://github.com/chrede88/qubt/compare/v1.6.0...HEAD
[1.6.0]: https://github.com/chrede88/qubt/releases/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/chrede88/qubt/releases/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/chrede88/qubt/releases/compare/v1.3.2...v1.4.0
[1.3.2]: https://github.com/chrede88/qubt/releases/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/chrede88/qubt/releases/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/chrede88/qubt/releases/compare/v1.2.10...v1.3.0
[1.2.10]: https://github.com/chrede88/qubt/releases/compare/v1.2.9...v1.2.10
[1.2.9]: https://github.com/chrede88/qubt/releases/compare/v1.2.8...v1.2.9
[1.2.8]: https://github.com/chrede88/qubt/releases/compare/v1.2.7...v1.2.8
[1.2.7]: https://github.com/chrede88/qubt/releases/compare/v1.2.6...v1.2.7
[1.2.6]: https://github.com/chrede88/qubt/releases/compare/v1.2.5...v1.2.6
[1.2.5]: https://github.com/chrede88/qubt/releases/compare/v1.2.4...v1.2.5
[1.2.4]: https://github.com/chrede88/qubt/releases/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/chrede88/qubt/releases/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/chrede88/qubt/releases/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/chrede88/qubt/releases/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/chrede88/qubt/releases/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/chrede88/qubt/releases/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/chrede88/qubt/releases/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/chrede88/qubt/releases/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/chrede88/qubt/releases/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/chrede88/qubt/releases/tag/v1.0.0
