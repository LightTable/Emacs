## Emacs for Light Table

A thin wrapper around CodeMirror's Emacs mode that integrates it into Light Table.

For additional Emacs-like functionality, see [the guide for Emacs
Users](https://github.com/LightTable/LightTable/wiki/For-Emacs-Users).

## Setup

Install the `Emacs` plugin using the Plugin Manager.
Emacs keybindings only take effect on new files. Existing files will need to be reopened.

## For Committers

Upgrade `emacs.js` with the following where `$VERSION` is a version number tag:

    curl https://raw.githubusercontent.com/codemirror/CodeMirror/$VERSION/keymap/emacs.js > emacs.js

`emacs.js` is currently on CodeMirror version 4.5.0.

### License

Copyright (C) 2013 Kodowa Inc.

Distributed under the MIT license, see license.md for the full text.
