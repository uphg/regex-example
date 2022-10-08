import { assert, describe, expect, it } from 'vitest'

describe('suite name', () => {
  it('foo', () => {
    
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})