import { describe, expect, it } from 'vitest'
import { rePercent } from '../src/main'

describe('Percent', () => {
  const goods = ['1', '100', '0.1', '0.12', '10.5', '99.5']
  const bads = ['100.5', '-1', '101', '00.12', '.1', '1.', '1.2.3']

  describe('Good example', () => {
    goods.forEach((item) => {
      it(`Percent: ${item}`, () => expect(rePercent.test(item)).toBeTruthy())
    })
  })
  describe('Bad example', () => {
    bads.forEach((item) => {
      it(`Percent: ${item}`, () => expect(rePercent.test(item)).toBeFalsy())
    })
  })
})