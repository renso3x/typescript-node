import { sum } from '../src';

describe("sum should calculate the numbers properly", () => {
  test("3 + 2 = 5", () => {
    expect(sum(2, 3)).toBe(5)
  })
})