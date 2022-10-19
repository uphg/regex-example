import { describe, expect, it } from 'vitest'
import { reMoney } from '../src/main'

describe('Money', () => {
  const positives = ['123', '123.12', '0.12']
  const counters = ['0123', '123.', '.12', '00.12', '000.12']

  describe('Positive example', () => {
    positives.forEach((item) => {
      it(`money: ${item}`, () => expect(reMoney.test(item)).toBeTruthy())
    })
  })
  describe('Counter example', () => {
    counters.forEach((item) => {
      it(`money: ${item}`, () => expect(reMoney.test(item)).toBeFalsy())
    })
  })
})