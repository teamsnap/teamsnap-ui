## Contributing

This package is managed via npm so you will need to create a user and be added to the teamsnap org in order to publish updates.

Once your user is created and added to the org this guide details the steps to publish an update to npm.

<https://docs.npmjs.com/getting-started/publishing-npm-packages>

#### Steps for publishing an update

* rebase and get  your branch ahead of main
* then from your working branch
* run `yarn npm audit` to ensure there are no vulnerabilities with level high or critical.
* run `yarn run build` to ensure the package builds with no errors
* As necessary, update packages to resolve npm audit failures for level high or critical vulnerabilities.
* Update the package.json version number `npm version [major|minor|patch] -m "commit message"`
* Update CHANGELOG.md with new npm version and release notes
* Commit CHANGELOG
* `git push origin branch-name`
* merge branch into main from git
* `git checkout main`
* `git pull origin main`
* `npm login --scope=@teamsnap`
* `npm publish`

#### Netlify deploy
Merging to main triggers a Netlify deploy where static assets will be available if not using npm to serve the package.

CSS URL: https://teamsnap-ui.teamsnap.com/css/teamsnap-ui.css
Themes: https://teamsnap-ui.teamsnap.com/css/themes/{theme_name}
Example: https://teamsnap-ui.teamsnap.com/css/themes/league.css


**Note**

The sass-lint plugin is configured as a prepublish step so if there are linting errors you will need to resolve them before publishing.

If you run into issues updating the package version number, try logging in first and trying again. The npm
version number must be updated via `npm version [major|minor|patch] -m “commit message”`.
