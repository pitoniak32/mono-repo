import { adder, adderCjs } from './adder-logic/index.js'

console.log(`esm: ${adder(1, 1)}, cjs: ${adderCjs(1, 1)}`)
