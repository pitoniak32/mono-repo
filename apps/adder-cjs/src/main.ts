import { add } from '@mono/adding-cjs'

export function adder(a: number, b: number): number {
  return add(a, a) + add(b, b) + add(a, b)
}

console.log(adder(1, 1))
