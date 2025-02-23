basecli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/basecli.svg)](https://npmjs.org/package/basecli)
[![Downloads/week](https://img.shields.io/npm/dw/basecli.svg)](https://npmjs.org/package/basecli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mono/basecli
$ basecli COMMAND
running command...
$ basecli (--version)
@mono/basecli/0.0.0 linux-x64 node-v20.18.3
$ basecli --help [COMMAND]
USAGE
  $ basecli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`basecli hello PERSON`](#basecli-hello-person)
* [`basecli hello world`](#basecli-hello-world)
* [`basecli help [COMMAND]`](#basecli-help-command)
* [`basecli plugins`](#basecli-plugins)
* [`basecli plugins add PLUGIN`](#basecli-plugins-add-plugin)
* [`basecli plugins:inspect PLUGIN...`](#basecli-pluginsinspect-plugin)
* [`basecli plugins install PLUGIN`](#basecli-plugins-install-plugin)
* [`basecli plugins link PATH`](#basecli-plugins-link-path)
* [`basecli plugins remove [PLUGIN]`](#basecli-plugins-remove-plugin)
* [`basecli plugins reset`](#basecli-plugins-reset)
* [`basecli plugins uninstall [PLUGIN]`](#basecli-plugins-uninstall-plugin)
* [`basecli plugins unlink [PLUGIN]`](#basecli-plugins-unlink-plugin)
* [`basecli plugins update`](#basecli-plugins-update)
* [`basecli update [CHANNEL]`](#basecli-update-channel)

## `basecli hello PERSON`

Say hello

```
USAGE
  $ basecli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ basecli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `basecli hello world`

Say hello world

```
USAGE
  $ basecli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ basecli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `basecli help [COMMAND]`

Display help for basecli.

```
USAGE
  $ basecli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for basecli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.25/src/commands/help.ts)_

## `basecli plugins`

List installed plugins.

```
USAGE
  $ basecli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ basecli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/index.ts)_

## `basecli plugins add PLUGIN`

Installs a plugin into basecli.

```
USAGE
  $ basecli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into basecli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BASECLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BASECLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ basecli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ basecli plugins add myplugin

  Install a plugin from a github url.

    $ basecli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ basecli plugins add someuser/someplugin
```

## `basecli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ basecli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ basecli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/inspect.ts)_

## `basecli plugins install PLUGIN`

Installs a plugin into basecli.

```
USAGE
  $ basecli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into basecli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BASECLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BASECLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ basecli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ basecli plugins install myplugin

  Install a plugin from a github url.

    $ basecli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ basecli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/install.ts)_

## `basecli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ basecli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ basecli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/link.ts)_

## `basecli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ basecli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ basecli plugins unlink
  $ basecli plugins remove

EXAMPLES
  $ basecli plugins remove myplugin
```

## `basecli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ basecli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/reset.ts)_

## `basecli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ basecli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ basecli plugins unlink
  $ basecli plugins remove

EXAMPLES
  $ basecli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/uninstall.ts)_

## `basecli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ basecli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ basecli plugins unlink
  $ basecli plugins remove

EXAMPLES
  $ basecli plugins unlink myplugin
```

## `basecli plugins update`

Update installed plugins.

```
USAGE
  $ basecli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/update.ts)_

## `basecli update [CHANNEL]`

update the basecli CLI

```
USAGE
  $ basecli update [CHANNEL] [--force |  | [-a | -v <value> | -i]] [-b ]

FLAGS
  -a, --available        See available versions.
  -b, --verbose          Show more details about the available versions.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
      --force            Force a re-download of the requested version.

DESCRIPTION
  update the basecli CLI

EXAMPLES
  Update to the stable channel:

    $ basecli update stable

  Update to a specific version:

    $ basecli update --version 1.0.0

  Interactively select version:

    $ basecli update --interactive

  See available versions:

    $ basecli update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v4.6.31/src/commands/update.ts)_
<!-- commandsstop -->
