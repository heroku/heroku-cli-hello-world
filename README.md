@heroku-cli/plugin-hello-world
==============================

heroku CLI example plugin

[![Version](https://img.shields.io/npm/v/@heroku-cli/plugin-hello-world.svg)](https://npmjs.org/package/@heroku-cli/plugin-hello-world)
[![CircleCI](https://circleci.com/gh/heroku/heroku-cli-hello-world/tree/master.svg?style=shield)](https://circleci.com/gh/heroku/heroku-cli-hello-world/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/heroku/heroku-cli-hello-world?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/heroku-cli-hello-world/branch/master)
[![Codecov](https://codecov.io/gh/heroku/heroku-cli-hello-world/branch/master/graph/badge.svg)](https://codecov.io/gh/heroku/heroku-cli-hello-world)
[![Greenkeeper](https://badges.greenkeeper.io/heroku/heroku-cli-hello-world.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/heroku/heroku-cli-hello-world/badge.svg)](https://snyk.io/test/github/heroku/heroku-cli-hello-world)
[![Downloads/week](https://img.shields.io/npm/dw/@heroku-cli/plugin-hello-world.svg)](https://npmjs.org/package/@heroku-cli/plugin-hello-world)
[![License](https://img.shields.io/npm/l/@heroku-cli/plugin-hello-world.svg)](https://github.com/heroku/heroku-cli-hello-world/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
<!-- install -->
# Install

with yarn:
```
$ yarn global add @heroku-cli/plugin-hello-world
```

or with npm:
```
$ npm install -g @heroku-cli/plugin-hello-world
```
<!-- installstop -->
<!-- usage -->
# Usage

```sh-session
$ heroku COMMAND
running command...
$ heroku (-v|--version|version)
@heroku-cli/plugin-hello-world/0.0.1 (darwin-x64) node-v9.5.0
$ heroku --help [COMMAND]
USAGE
  $ heroku COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
# Commands

* [heroku hello:world [FILE]](#hello-world-file)
## hello:world [FILE]

describe the command here

```
USAGE
  $ heroku hello:world [FILE]

OPTIONS
  -f, --force
  -n, --name=name  name to print

EXAMPLES
  $ oclif-example hello
  hello world from ./src/hello.ts!

  $ oclif-example hello --name myname
  hello myname from .src/hello.ts!
```

_See code: [src/commands/hello/world.ts](https://github.com/heroku/heroku-cli-hello-world/blob/v0.0.1/src/commands/hello/world.ts)_
<!-- commandsstop -->
