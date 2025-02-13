import { add } from '../src/add'

describe('E2E add-cjs', () => {
  it('add', () => {
    // Arrange / Act
    const result = add(1, 1)
    // Assert
    expect(result).toEqual(2)
  })
})
