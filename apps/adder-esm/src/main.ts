import { add as addCjs } from "@mono/adding-cjs";
import { add } from "@mono/adding-esm";

export function adder(a: number, b: number): number {
	return add(a, a) + add(b, b) + add(a, b);
}

export function adderCjs(a: number, b: number): number {
	return addCjs(a, a) + addCjs(b, b);
}

console.log(adder(1, 1));
