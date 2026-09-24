## Contributing

### Releasing

Releases are automated via [semantic-release](https://github.com/semantic-release/semantic-release) and [npm trusted publishing](https://docs.npmjs.com/trusted-publishers). When a PR is merged to `main`, the release workflow runs automatically.

**Versioning is determined by commit messages** using [Conventional Commits](https://www.conventionalcommits.org/):

* `fix: ...` — patch release (e.g. 3.13.0 → 3.13.1)
* `feat: ...` — minor release (e.g. 3.13.0 → 3.14.0)
* `feat!: ...` or `BREAKING CHANGE:` in the commit body — major release (e.g. 3.13.0 → 4.0.0)
* `chore: ...`, `docs: ...`, `ci: ...` — no release

**To publish a new version:**

1. Create a branch and make your changes
2. Open a PR against `main`
3. Use a `feat:` or `fix:` prefix in your commit message (or PR title if squash-merging)
4. Merge the PR — the release workflow handles versioning, tagging, npm publish, and GitHub release creation

No manual `npm login` or `npm publish` is needed.

### Netlify deploy

Merging to main triggers a Netlify deploy where static assets will be available if not using npm to serve the package.

CSS URL: https://teamsnap-ui.teamsnap.com/css/teamsnap-ui.css
Themes: https://teamsnap-ui.teamsnap.com/css/themes/{theme_name}
Example: https://teamsnap-ui.teamsnap.com/css/themes/league.css
