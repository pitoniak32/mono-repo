import { add } from '@mono/adding-esm'

export function adder(a: number, b: number): number {
  return add(a, a) + add(b, b)
}

console.log(adder(1, 1))