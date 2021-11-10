<div align="center">
  <img alt="react simple icons" src="https://raw.githubusercontent.com/icons-pack/react-simple-icons/canary/docs/images/svg/react-simple-icons.svg" width="150" />

# react-simple-icons

This package provides a React component for [simple-icons](https://github.com/simple-icons/simple-icons).

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
npm install @icons-pack/react-simple-icons
```

> TypeScript Support

## Usage

You can use [simpleicons.org](https://simpleicons.org) to find a specific icon. Then, you can import the icon from `simple-icons` and use it with the `Icon` component:

```jsx
import { ReactJs } from '@icons-pack/react-simple-icons';

function BasicExample() {
  return <ReactJs color="#61DAFB" size={24} />;
}
```

## Demo

[Edit codesandbox](https://codesandbox.io/s/interesting-yonath-x7o7g?file=/src/App.js)

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
