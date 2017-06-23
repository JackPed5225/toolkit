# Contributing to the [Toolkit](https://github.com/sky-uk/toolkit)

We greatly appreciate and encourage people contributing back into the Toolkit.

## Coding Style

Toolkit follows closely to the principles of Sky’s [CSS Style
Guide](https://github.com/sky-uk/css), as well as extending its `stylelint`
configuration.

## Quick Start

Instantly grab a Toolkit-conformant [.scss template](https://git.io/template):

```bash
curl -L git.io/template -o _<your-file-name>.scss
```

## Creating Issues

Submit issues to the issue tracker on the [appropriate
repository](https://github.com/sky-uk/toolkit#structure) for suggestions,
recommendations, and bugs.

When submitting issues, please make sure you utilise the template provided by
default.

**Please note**: If it’s an issue that’s urgent / you feel you can fix yourself,
please feel free to make some changes and submit a [pull
request](#pull-requests). We’d love to see your contributions.

## Git Workflow

With Toolkit being an open source project, we need to take greater care than
ever with our Git workflow and strategy. Please follow the below instructions
very closely.

### Setting Up Git

We want to set up Git to make our workflow as seamless and automated as
possible. We’re going to configure Git to utilise your preferred text editor
_and_ to use a specific commit message template. Just a couple of things to make
your life a little easier.

```bash
$ cd toolkit
# Tell Git to use your preferred text editor (see below):
toolkit $ git config core.editor <your editor here>
# Tell Git to prepopulate commit messages with our template
toolkit $ git config commit.template ./.github/.git-commit-template
```

**N.B.** You need to be able to open your editor from the CLI. For Atom, replace
`<your editor here>` with `atom --wait`; for VS Code, `code --wait`. For other
text editors, simply Google [_open EDITOR from command
line_](https://www.google.com/search?q=open+EDITOR+from+command+line&oq=open+EDITOR+from+command+line&aqs=chrome..69i57j0l5.6702j0j7&sourceid=chrome&ie=UTF-8).

Now, whenever you run `git commit`, you will be taken to your text editor
(instead of the default, Vim) where you can write your commit messages. Save and
close your editor, and the commit is done.

### Branching Strategy

Toolkit comprises three main branches:

1. **`master`:** Our release branch that everybody consumes. This branch is the
   one that gets tagged, versioned and deployed to npm.
2. **`develop`:** Our stable branch that we branch from and merge into. This is
   our working branch.
3. **`tkt-#####`:** Our topic branches in which we carry out work. As we will
   learn below, each of these branches is named in reference to a specific
   GitHub issue.

```
                          * tkt-#####
                          |
                          |
             * develop    |
             |\           |
             | \          |
* master     |  \         |
|\           |   \        |
| \          |    \       |
|  \         |     \      |
|   \        |      \     |
|    \       *       \    |
|     \      |\       \   |
|      \     | \       \  |
|       \    |  \       \ |
|        \   |   \        *
|         \  |    \       |
|          \ |     \      |
|            *      \     |
|            |       \    |
|            |        \   |
```

`tkt-#####` is branched off `develop` is branched off `master`.

Work in `tkt-#####` is merged into `develop` via a pull request; work in
`develop` is merged into `master` on the command line before rolling an official
release (Core Maintainers only).

Nine times out of ten, you will be working in a `tkt-` branch.

#### ghi

Now that branches are named after issue, it’s not as immediately clear what each
branch is responsible for. [ghi](https://github.com/stephencelis/ghi) is a great
little tool that allows you to query GitHub issues from the command line. Let’s
imagine that `git branch` leaves you looking at this:

```bash
$ git branch
  develop
  master
* tkt-00224
  tkt-00220
  tkt-00209
  tkt-00141
```

If I run `ghi 220` I soon find that branch `tkt-00220` relates to issue #220,
_Tabs navigation width issue with many tabs_.

### Committing Workflow

1. Every piece of work should have a corresponding issue on GitHub (e.g.
   `issues/224`).
2. Check out `develop` and ensure you have the latest upstream changes:

        $ cd toolkit
        toolkit $ git checkout develop
        toolkit $ git pull
3. Create a new branch named after your issue:

        toolkit $ git checkout -b tkt-00224

   All commits pertaining to this issue must happen within this branch.
4. All commits in this branch should begin with `[refs #00224]`: pad the issue
   number with leading zeroes until you’re at five (5) digits.
     * Instead of running `git commit -m "<message>"`, stage your files as you
       would normally, and run `git commit`. This will fire open your text
       editor with the prepopulated template ready for you to fill out.
6. Now your commits—based on the template—should resemble this:

        commit 1dcf5d4bc18d5fd3321f4c60d879cfd5d5e2dd1f
        Author: Harry Roberts <csswizardry@gmail.com>
        Date:   Wed, 21 Jun 2017 10:08:36 +0100

            [refs #00224] Add Git workflow documentation

            Though relatively straightforward, our Git workflow is pretty
            involved. I’ve made my best attempt at documenting the setup and
            steps involved in writing compliant commit messages.

### Why?

A more formalised and strict Git strategy means that

1. **We’ll have a nice, clean, respectable public history.** There’s a lot of
   great work in Toolkit; we should be equally proud of our log of it.
2. **Grepping logs for work pertaining to specific issues becomes trivial.** If
   we wanted to see all of the commits that are related to a specific body of
   work, it’s now as simple as:

        $ git log --grep='refs #00235'
3. **We can easily locate work pertaining to an issue by simply matching issue
   numbers to branch names.** Imagine a colleague was working on an issue but
   then suddenly fell ill and you needed to pick up where they left off. Now all
   you have to do is look at the issue number, and checkout its corresponding
   branch. All work becomes centralised and easy to find.

## Pull Requests

1. Create a new local branch for your work.
   * This branch should be named `tkt-<issue numner>`, e.g. `tkt-00215`,
     `tkt-00087`, `tkt-01209`.
2. As early as possible, create a pull request against `develop`. Make sure you
   give enough information in the pull request description (utilising the
   template provided by default), and add the label `in progress` with any other
   appropriate label.
3. Once any conflicts have been fixed and you’re ready for your code to be
   reviewed, remove the `in progress` label and add `reviews needed`.
4. Request a code review from two or more developers.
   * You’ll need at least **two** approvals on the pull request before being
     able to merge, and **one of these approvals must be from a [core
     maintainer](https://github.com/sky-uk/toolkit#maintainers)**.
     * **N.B.** For major/breaking changes, you require **two core maintainer
       approvals**.
5. One of the [core maintainers](https://github.com/sky-uk/toolkit#maintainers)
   will merge the changes and apply appropriate versioning to release (see
   below).

## Discussion

For discussion of issues and general project talk, head over to
[#toolkit](http://sky.slack.com/messages/toolkit) on Slack.

---

# [Core Maintainers](https://github.com/sky-uk/toolkit#champions)

## Responsibilities

### Code Reviews

* Each core maintainer should participate in 20% of PRs.
* All PRs must have at least one comment within one working day.

### Steering

* Each core maintainer should attend 50% of steering meetings.

### Contributions

* Every core maintainer will complete 1 ticket per month.
* Work is done in priority order according to the
   [backlog](https://waffle.io/sky-uk/toolkit).

If you feel like you can’t meet these responsibilities, please contact one of
the core maintainers or [Tom Davidson](@tom-davidson).

## Releases

1. Merge fully-approved PR into `master`.
2. Run `git checkout master && git pull`.
3. Include all new functional changes in the appropriate `CHANGELOG.md`(s).
   * Pro tip: use the following command to get a commit summary of changes.

      ```
      $ git log --oneline <last tag>.. -- packages/sky-toolkit-[core|ui]/
      ```
4. Commit and push the `CHANGELOG.md` changes to `master`.
5. Run `lerna publish`.
   * Be sure to read and follow the wizard very carefully, making sure to use
     the correct and appropriate patch/minor/major semver tag(s).
6. Go to [Toolkit/Releases](https://github.com/sky-uk/toolkit/releases), and
   check the tag exists.
   * If the tag exists, congrats! Now create a [**new**
     release](https://github.com/sky-uk/toolkit/releases/new) that utilises that
     tag.
   * If the tag doesn't exist, something went wrong.
7. Run `npm run dist` to generate `toolkit.css` and `toolkit-core.css`.
   * Upload these to s3 `sky.com/assets/[toolkit|toolkit-core]/v[version]` as
     well as overriding `/latest` (see maintainers Slack channel).
   * N.B. If your CSS doesn’t seem to be compiling with the expected changes,
     run `npm run clean` and try again.
8. Communicate changes out on Slack.
