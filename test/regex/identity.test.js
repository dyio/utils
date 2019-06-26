import checkIdentity from '../../code/regex/identity'

test('checkIdentity 1', () => {
  expect(checkIdentity('371923191203010322')).toBe(true)
})

test('checkIdentity 2', () => {
  expect(checkIdentity('81192319120301032x')).toBe(true)
})

test('checkIdentity 3', () => {
  expect(checkIdentity('72192319120301032x')).toBe(false)
})

test('checkIdentity 4', () => {
  expect(checkIdentity('72192319120301')).toBe(false)
})

test('checkIdentity 5', () => {
  expect(checkIdentity('372922186603020866')).toBe(false)
})
