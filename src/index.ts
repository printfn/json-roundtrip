export type JsonCompatible =
	| null
	| string
	| number
	| boolean
	| JsonCompatible[]
	| { [key in string]?: JsonCompatible };

/// Equivalent to `JSON.parse(JSON.stringify(value))` but with a
/// type-safe signature.
export function jsonRoundtrip<T extends JsonCompatible>(value: T): T {
	return JSON.parse(JSON.stringify(value));
}
