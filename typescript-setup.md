# Setup Typescript project

featuring:
- eslint
- prettier
- husky
- jest

## Steps

### 1. Initialize project

- git init
- npm init

### 2. Add typescript

`npm install -D typescript`

### 3. setup eslint

- eslint
- typescript-eslint
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- eslint-plugin-import

npm i eslint typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import

create eslint.config.js and export eslint config object with extends, parser, plugins, rules, settings keys.

### 4. setup prettier

- prettier
- eslint-config-prettier
- eslint-plugin-prettier

npm i prettier eslint-config-prettier eslint-plugin-prettier

create .prettierrc.json and add prettier rules like semi, singleQuote, tabWidth, trailingComma.

### 5. setup husky

`npx husky-init`

This will install husky as dev dependency and setup .husky directory with husky script file and pre-commit hook file.

This will also add a script to package.json like `"prepare": "husky install"`. so that other devs will have to run `npm prepare` to setup .husky in their local systems.

We can update pre-commit with our custom commands those need to be run before committing the code. Like - `npm lint:fix && npm test`

Everytime we run git commit, these commands are going to be executed first. If there's any error with linting or tests, commit action wil fail.

### 6. setup commit-msg

commit-msg hook is used to validate the commit message and check if they are compatabile with conventional commit (which follow semantic versioning)

use `npx husky add .husky/commit-msg` to generate commit-msg hook in `.husky`

Add this to `.husky/commit-msg` which will check for specific type, scope, message in the commit.

```sh
#!/bin/sh
if ! head -1 "$1" | grep -qE "^(feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert)(\(.+?\))?: .{1,}$"; then
    echo "Aborting commit. Your commit message is invalid." >&2
    exit 1
fi
if ! head -1 "$1" | grep -qE "^.{1,88}$"; then
    echo "Aborting commit. Your commit message is too long." >&2
    exit 1
fi
```

### 8. setup jest

- jest
- @types/jest
- ts-jest
- eslint-plugin-jest

`test command: jest --coverage --watch`