# json-roundtrip

This library provides a type-safe implementation of safely cloning values using
`JSON.parse` and `JSON.stringify`.

```typescript
import { jsonRoundtrip } from 'json-roundtrip';

const value1 = jsonRoundtrip({ a: 1 });
const value2 = jsonRoundtrip('Hello, world');

// @ts-expect-error
const error = jsonRoundtrip({ a: 5, double: n => n * 2 });
```

Note that `interface` values are not supported as they may have additional
unserializable properties.

```typescript
interface MyProps {
	a: number;
	b: string;
}

function MyComponent(props: MyProps) {
	// @ts-expect-error
	const copiedProps = jsonRoundtrip(props);

	// ...
}
```

Instead, use `type` to define the shape of the value.

```typescript
type MyProps = {
	a: number;
	b: string;
};

function MyComponent(props: MyProps) {
	const copiedProps = jsonRoundtrip(props);

	// ...
}
```
