## Contributing

This package is managed via npm so you will need to create a user and be added to the teamsnap org in order to publish updates.

Once your user is created and added to the org this guide details the steps to publish an update to npm.

<https://docs.npmjs.com/getting-started/publishing-npm-packages>

#### Steps for publishing an update

* rebase and get  your branch ahead of master
* then from your working branch
* `npm login --scope=@teamsnap`
* `npm version major/minor/patch -m “commit message”`
* Update CHANGELOG.md with npm version and release notes
* Commit CHANGELOG
* `git push origin branch-name`
* merge branch into master from git
* `git checkout master`
* `git pull origin master`
* `npm publish`
* To update TeamSnap CSS assets on CDN, run `jarvis deploy teamsnap_ui/master` in #chatops
* As necessary, update CSS version number in repositories that reference it:
  - Classic (for NJW): https://github.com/teamsnap/classic/blob/master/app/views/_header_head_tag.html.erb#L33

**Note**

The sass-lint plugin is configured as a prepublish step so if there are linting errors you will need to resolve them before publishing.
