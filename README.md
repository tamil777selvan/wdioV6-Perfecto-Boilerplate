# webdriverio-v6-cucumber-perfecto-boilerplate

Boilerplate project to run WebdriverIO tests in Perfecto Cloud ([https://www.perfecto.io/]()) using Cucumber features, and the page objects pattern.

## Requirements

- Node version 8 or higher
- Perfecto Cloud Access

# Frameworks:
- webdriverIO (v6)
- cucumber (v6)

# Features:
- Cloud integration with [Perfecto](https://www.perfecto.io/)
- Supports Page Object Model
- Contains sample Scenarios written in Declarative style of BDD

## Running end-to-end tests

- Clone the git repo - `git clone https://github.com/tamil777selvan/wdioV6-Perfecto-Boilerplate.git`.

- Install dependencies with `npm i`.

- Update Device Capabilities and Perfecto Security Token in `config/perfectoConfig.json`

- Run `npm run perfecto` or `npx wdio ./config/wdio.conf.js` to execute the e2e tests.
