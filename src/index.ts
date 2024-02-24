export type JsonObject = { [key in string]?: JsonCompatible } & {
	[key in symbol | number]: never;
};

export type JsonArray = JsonCompatible[];

export type JsonCompatible =
	| null
	| string
	| number
	| boolean
	| JsonArray
	| JsonObject;

/// Equivalent to `JSON.parse(JSON.stringify(value))` but with a
/// type-safe signature.
export function jsonRoundtrip<T extends JsonCompatible>(value: T): T {
	return JSON.parse(JSON.stringify(value));
}
