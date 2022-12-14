# SportBuddy-Web
SportBuddy Web admin app

[![Building](https://github.com/stateman92/MSc-SportBuddy-Web/actions/workflows/main.yml/badge.svg)](https://github.com/stateman92/MSc-SportBuddy-Web/actions/workflows/main.yml)

## Issues

[Run Angular tests on GitHub Actions CI](https://stackoverflow.com/a/69780948)

[OpenAPI generated DELETE method Expected 1-2 arguments, but got 3](https://github.com/OpenAPITools/openapi-generator/issues/10864)

[Angular Input to Directive](https://github.com/angular/angular/issues/7920#issuecomment-205939620)

## Setup

- Checkout repo

- Make sure you've installed [WebStorm](https://www.jetbrains.com/webstorm/) 2022.2.3

- Run `npm install` in the terminal in the root directory

- Run `npm start` in the terminal in the root directory

- Open [http://localhost:8080/](http://localhost:8080/)

### Helpers

#### Update openapi generated files

- Make sure you've installed [OpenAPI generator](https://github.com/OpenAPITools/openapi-generator) 6.2.1 - if not, use e.g. `brew install openapi-generator` via [Homebrew](https://brew.sh/)

- Run `openapi-generator generate -i /path/to/descriptor/swagger.yaml -g typescript-angular -o /path/to/output` in the terminal

#### Update version

- Run `sh bump.sh` in the terminal

- By default it bumps the patch version. If you want other behavior, add a `major` / `minor` / `patch` flag, e.g. `sh bump.sh major`

#### Remove default clashing key-binding

- If you want, you can install Presentation Assistant (WebStorm / Preferences / Plugins) to see the action you make with shortcuts

- The shift + option + X is bound by default to the Clear context action, while it should write a '>' symbol. To remove the former action, go to WebStorm / Preferences / Keymap and search for "Clear context". There you can remove the binding
