import { describe, expect, it } from 'vitest'
import { reMoney } from '../src/main'

describe('Money', () => {
  const goods = ['1', '123', '123.12', '0.12']
  const bads = ['0123', '123.', '.12', '00.12', '000.12']

  describe('Good example', () => {
    goods.forEach((item) => {
      it(`money: ${item}`, () => expect(reMoney.test(item)).toBeTruthy())
    })
  })
  describe('Bad example', () => {
    bads.forEach((item) => {
      it(`money: ${item}`, () => expect(reMoney.test(item)).toBeFalsy())
    })
  })
})