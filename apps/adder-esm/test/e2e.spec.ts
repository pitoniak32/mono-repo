import { adder, adderCjs } from '../src/adder-logic/index.js'

describe('E2E adder-esm', () => {
  it('add + add', () => {
    // Arrange / Act
    const result = adder(1, 1)
    // Assert
    expect(result).toEqual(9)
  })
})

describe('E2E adder-cjs', () => {
  it('add + add', () => {
    // Arrange / Act
    const result = adderCjs(1, 1)
    // Assert
    expect(result).toEqual(4)
  })
})
