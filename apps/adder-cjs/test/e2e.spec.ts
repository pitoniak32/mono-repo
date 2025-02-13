import { adder } from '../src/adder-logic'

describe('E2E adder-esm', () => {
  it('add + add', () => {
    // Arrange / Act
    const result = adder(1, 1)
    // Assert
    expect(result).toEqual(6)
  })
})
