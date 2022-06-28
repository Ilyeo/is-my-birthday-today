import { expect, test, vi } from 'vitest'
import isMyBirthdayToday from '../src/is-my-birthday-today'

test('should return false when is not my birthday', () => {
  const myBirthday = new Date(2000, 8, 26)

  vi.setSystemTime(myBirthday)

  expect(isMyBirthdayToday()).toBeFalsy()
})

test('should return true in my birthday', () => {
  const myBirthday = new Date(2000, 7, 25)

  vi.setSystemTime(myBirthday)

  expect(isMyBirthdayToday()).toBeTruthy()
})

test('should return true in my girlfriend\'s birthday', () => {
  const myGirlfriendBirthday = new Date(2000, 6, 18)

  vi.setSystemTime(myGirlfriendBirthday)

  expect(isMyBirthdayToday({ day: 18, month: 7 })).toBeTruthy()
})
