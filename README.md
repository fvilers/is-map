# @fvilers/is-map

A TypeScript type guard that validates if the given value is a Map

## Installation

```
npm install @fvilers/is-map
```

or

```
yarn add @fvilers/is-map
```

## Usage

```ts
import isMap from "@fvilers/is-map";

const variable: any = new map();

if (isMap(variable)) {
  // From here, variable is strongly typed as a map
  console.log("Variable is a map with size of", map.size);
} else {
  console.log("Variable is not a map");
}
```

```
Variable is a map with size of 0
```
