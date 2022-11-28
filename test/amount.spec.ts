import { describe, expect, it } from 'vitest'
import { reAmount } from '../src/main'

describe('Amount', () => {
  const goods = ['1', '123', '123.12', '0.12']
  const bads = ['0123', '123.', '.12', '00.12', '000.12']

  describe('Good example', () => {
    goods.forEach((item) => {
      it(`amount: ${item}`, () => expect(reAmount.test(item)).toBeTruthy())
    })
  })
  describe('Bad example', () => {
    bads.forEach((item) => {
      it(`amount: ${item}`, () => expect(reAmount.test(item)).toBeFalsy())
    })
  })
})