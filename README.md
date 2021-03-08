# Typescript JSON Types

A library that adds JSON types, for working with JSON in a more typesafe manner.

## Installing

```sh
npm i @laurence79/ts-json
```

## Using

```ts
import { Json } from '@laurence79/ts-json';

const data = JSON.parse(sourceString);

if (typeof data === 'object' && !Array.isArray(data)) {
  // data is now JsonMap
  console.log(data.property);
}
```

## Contributing

Contributions welcome!
