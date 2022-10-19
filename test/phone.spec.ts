import { describe, expect, it } from 'vitest'
import { rePhone } from '../src/main'

describe('Phone', () => {
  const positives = [
    '15632245678',
    '13243234563',
    '19716628673',
    '1354123534'
  ]
  const counters = [
    '123',
    '133456789011',
    '133456789',
    '05632245678',
    '12632245678',
  ]

  describe('Positive example', () => {
    positives.forEach((item) => {
      it(`money: ${item}`, () => expect(rePhone.test(item)).toBeTruthy())
    })
  })
  describe('Counter example', () => {
    counters.forEach((item) => {
      it(`money: ${item}`, () => expect(rePhone.test(item)).toBeFalsy())
    })
  })
})