<div align="center">
  <img alt="react simple icons" src="https://raw.githubusercontent.com/icons-pack/react-simple-icons/canary/docs/images/svg/react-simple-icons.svg" width="150" />

# react-simple-icons

This package provides the [Simple Icons 4.25.0](https://github.com/simple-icons/simple-icons/releases/tag/4.25.0) packaged as a set of [React](https://facebook.github.io/react/) components.

  <a href="https://www.npmjs.com/package/@icons-pack/react-simple-icons" target="_blank">
    <img src="https://img.shields.io/npm/v/@icons-pack/react-simple-icons?color=CB061D&style=flat-square" alt="www.npmjs.com!" />
  </a>

  <a href="https://travis-ci.com/github/icons-pack/react-simple-icons" target="_blank">
    <img src="https://img.shields.io/travis/icons-pack/react-simple-icons?color=008660&style=flat-square" alt="builds!" />
  </a>

  <a href="https://www.npmjs.com/package/@icons-pack/react-simple-icons" target="_blank">
    <img src="https://img.shields.io/npm/dw/@icons-pack/react-simple-icons?color=087BB4&style=flat-square" alt="downloads" />
  </a>

  <a href="https://github.com/icons-pack/react-simple-icons/blob/canary/LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/@icons-pack/react-simple-icons?color=008660&style=flat-square" alt="licence" />
  </a>
</div>

## Installation

Install the package in your project directory with:

```sh
// with yarn
yarn add @icons-pack/react-simple-icons

// with npm
npm add @icons-pack/react-simple-icons
```

> TypeScript Support

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
- [`X.Org`](https://simpleicons.org/?q=x.Org) is exposed as `{ XDotOrg } from @icons-pack/react-simple-icons`
- [`FerrarinDotVDot`](https://simpleicons.org/?q=Ferrari%20N.V) is exposed as `{ FerrarinDotVDot } from @icons-pack/react-simple-icons`

## Demo

[Edit codesandbox](https://codesandbox.io/s/interesting-yonath-x7o7g?file=/src/App.js)

## Basic example

```jsx
import { ReactJs } from '@icons-pack/react-simple-icons';

function BasicExample() {
  return <ReactJs color="#61DAFB" size={24} />;
}
```

## Change title

`@icons-pack/react-simple-icons` provides a default title referring to the component name

> The `<title>` element provides an accessible, short-text description of any SVG container element or graphics element.

```jsx
import { ReactJs } from '@icons-pack/react-simple-icons';

// title default "React"
function ChangeTitle() {
  return <ReactJs title="My title" color="#61DAFB" size={24} />;
}
```

## Custom styles

```jsx
import { ReactJs } from '@icons-pack/react-simple-icons';

// title default "React"
function CustomStyles() {
  return <ReactJs className="myStyle" />;
}
```

```css
.myStyle {
  width: 35px;
  height: 35px;
}
```
