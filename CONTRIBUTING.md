## Contributing

#### Steps for publishing an update

* rebase and get your branch ahead of master
* then from your working branch
* run `yarn npm audit` to ensure there are no vulnerabilities with level high or critical.
* run `yarn run build` to ensure the package builds with no errors
* As necessary, update packages to resolve npm audit failures for level high or critical vulnerabilities.
* Use conventional commits to commit changes to the codebase (https://www.conventionalcommits.org/en/v1.0.0/)
* `git push origin branch-name`
* merge branch into v4 from github
* To update TeamSnap CSS assets on CDN, run `jarvis deploy teamsnap_ui/master` in #chatops
* As necessary, update CSS version number in repositories that reference it:
  - Classic (for NJW): https://github.com/teamsnap/classic/blob/master/app/views/_header_head_tag.html.erb#L33

#### What gets published?
We use semantic release and conventional commits to determine what triggers a publish. You no longer need to publish v4, as our CI/CD pipeline will take care of that for you, however, you do have to follow the conventional commit message spec to trigger a build. Commitizen is a fantastic tool to help you follow the convention commit spec and we strongly recommend using that.

**Note**

The sass-lint plugin is configured as a prepublish step so if there are linting errors you will need to resolve them before publishing.

If you run into issues updating the package version number, try logging in first and trying again. The npm
version number must be updated via `npm version [major|minor|patch] -m “commit message”`.
