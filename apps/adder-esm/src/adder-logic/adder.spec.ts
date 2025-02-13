import { adder, adderCjs } from './index.js'

describe('adder-esm', () => {
  it('add + add', () => {
    // Arrange / Act
    const result = adder(1, 1)
    // Assert
    expect(result).toEqual(6)
  })
})

describe('adder-cjs', () => {
  it('add + add', () => {
    // Arrange / Act
    const result = adderCjs(1, 1)
    // Assert
    expect(result).toEqual(4)
  })
})
