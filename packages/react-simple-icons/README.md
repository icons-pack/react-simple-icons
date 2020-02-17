<div align="center">

# `@icons-pack/react-simple-icons`

This package provides the [Simple Icons 2.5.0](https://simpleicons.org) packaged as a set of [React](https://facebook.github.io/react/) components.

  <a href="https://www.npmjs.com/package/@icons-pack/react-simple-icons" target="_blank">
    <img src="https://img.shields.io/npm/v/@icons-pack/react-simple-icons?color=red&style=flat-square" alt="www.npmjs.com!" />
  </a>

  <a href="https://travis-ci.org/mamut-dev/icons-pack/builds/" target="_blank">
    <img src="https://img.shields.io/travis/mamut-dev/icons-pack/master?style=flat-square" alt="builds!" />
  </a>

</div>

## Installation

Install the package in your project directory with:

```sh
// with yarn
yarn add @icons-pack/react-simple-icons

// with npm
npm install --save @icons-pack/react-simple-icons
```

## Usage

You can use [simpleicons.org](https://simpleicons.org) to find a specific icon.
When importing an icon, keep in mind that the names of the icons are [upperCamelCase](https://github.com/samverschueren/uppercamelcase) , for instance:

- [`Material Design`](https://simpleicons.org/?q=material) is exposed as `{ Materialdesign } from @icons-pack/react-simple-icons`
- [`azure devOps`](https://simpleicons.org/?q=azure%20devOps) is exposed as `{ Azuredevops } from @icons-pack/react-simple-icons`

These are some exceptions to this rule:

- [`500px`](https://simpleicons.org/?q=500px) is exposed as `{ FiveHundredPx } from @icons-pack/react-simple-icons`
- [`c++`](https://simpleicons.org/?q=+) is exposed as `{ Cplusplus } from @icons-pack/react-simple-icons`
- [`.Net`](https://simpleicons.org/?q=.net) is exposed as `{ DotNet } from @icons-pack/react-simple-icons`
- [`D3.js`](https://simpleicons.org/?q=d3) is exposed as `{ D3DotJs } from @icons-pack/react-simple-icons`
- [`dev.to`](https://simpleicons.org/?q=dev.to) is exposed as `{ DevDotTo } from @icons-pack/react-simple-icons`
- [`webcomponents.org`](https://simpleicons.org/?q=webcomponents.org) is exposed as `{ WebcomponentsDotOrg } from @icons-pack/react-simple-icons`

## Example

```jsx
import { ReactJs } from '@icons-pack/react-simple-icons';

function Example() {
  return <ReactJs color="#61DAFB" size={24} />;
}
```

## note

We can change from `uppercamelcase` to `PascalCase` in future version

## Documentation

> Coming soon
