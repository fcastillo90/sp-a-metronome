import {getSeconds} from './bpmCalculator'

describe('bpmCalculator', () => {
  it('should return the correct seconds', () => {
    expect(getSeconds(60)).toBe(1)
    expect(getSeconds(72)).toBe(0.8333333333333334)
    expect(getSeconds(120)).toBe(0.5)
  })
})