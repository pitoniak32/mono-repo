import { adder } from '../src/adder-logic'

describe('adder-esm', () => {
  it('add + add', () => {
    // Arrange / Act
    const result = adder(1, 1)
    // Assert
    expect(result).toEqual(6)
  })
})
