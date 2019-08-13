# `@icons-pack/react-simple-icons`

This package provides the [Simple Icons](https://simpleicons.org) packaged as a set of [React](https://facebook.github.io/react/) components.

## Installation

Install the package in your project directory with:

```sh
npm install @icons-pack/react-simple-icons
```

## Usage

You can use [simpleicons.org](https://simpleicons.org) to find a specific icon.
When importing an icon, keep in mind that the names of the icons are [upperCamelCase](https://github.com/samverschueren/uppercamelcase) , for instance:

- [`Material Design`](https://simpleicons.org/?q=material) is exposed as `@icons-pack/react-simple-icons/Materialdesign`
- [`azure devOps`](https://simpleicons.org/?q=azure%20devOps) is exposed as `@icons-pack/react-simple-icons/Azuredevops`

There are exceptions to this rule:
- [`500px`](https://simpleicons.org/?q=500px) is exposed as `@icons-pack/react-simple-icons/FiveHundredPx`
- [`c++`](https://simpleicons.org/?q=+) is exposed as `@icons-pack/react-simple-icons/Cplusplus`
- [`.Net`](https://simpleicons.org/?q=.net) is exposed as `@icons-pack/react-simple-icons/DotNet`

## Example

```jsx
import { ReactJs } from '@icons-pack/simple-icons';

function Example() {
  return (
    <ReactJs color="#61DAFB" size={24} />
  )
}
```

## note 

We can change from `uppercamelcase` to `PascalCase` in version 2

## Documentation

> Coming soon
