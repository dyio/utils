import getLocation from '../../code/regex/index'

test('getLocation 1', () => {
  expect(getLocation('http://www.baidu.com')).toEqual({
    match: 'http://www.baidu.com',
    origin: 'http://www.baidu.com',
    protocal: 'http:',
    host: 'www.baidu.com',
    port: undefined,
    pathname: '/',
    search: undefined,
    hash: undefined
  })
})

test('getLocation 2', () => {
  expect(getLocation('www.baidu.com')).toEqual(undefined)
})

test('getLocation 3', () => {
  expect(getLocation('http://www.baidu.com/abc/#abc')).toEqual({
    match: 'http://www.baidu.com/abc/#abc',
    origin: 'http://www.baidu.com',
    protocal: 'http:',
    host: 'www.baidu.com',
    port: undefined,
    pathname: '/abc/',
    search: undefined,
    hash: '#abc'
  })
})

test('getLocation 4', () => {
  expect(getLocation('http://www.baidu.com/_abc/#abc')).toEqual({
    match: 'http://www.baidu.com/',
    origin: 'http://www.baidu.com',
    protocal: 'http:',
    host: 'www.baidu.com',
    port: undefined,
    pathname: '/',
    search: undefined,
    hash: undefined
  })
})

test('getLocation 5', () => {
  expect(getLocation('http://www.baidu.com/abc/_abc/#abc')).toEqual({
    match: 'http://www.baidu.com/abc/',
    origin: 'http://www.baidu.com',
    protocal: 'http:',
    host: 'www.baidu.com',
    port: undefined,
    pathname: '/abc/',
    search: undefined,
    hash: undefined
  })
})

test('getLocation 6', () => {
  expect(getLocation('http://www.baidu.com/abc/a-bc?a/#abc')).toEqual({
    match: 'http://www.baidu.com/abc/a-bc',
    origin: 'http://www.baidu.com',
    protocal: 'http:',
    host: 'www.baidu.com',
    port: undefined,
    pathname: '/abc/a-bc',
    search: undefined,
    hash: undefined
  })
})

test('getLocation 7', () => {
  expect(getLocation('http://www.baidu.com/abc/a-bc?a=1&b=2#abc')).toEqual({
    match: 'http://www.baidu.com/abc/a-bc?a=1&b=2#abc',
    origin: 'http://www.baidu.com',
    protocal: 'http:',
    host: 'www.baidu.com',
    port: undefined,
    pathname: '/abc/a-bc',
    search: '?a=1&b=2',
    hash: '#abc'
  })
})

test('getLocation 8', () => {
  expect(getLocation('http://www.baidu.com:8080/abc/a-bc?a=1&b=2#abc')).toEqual({
    match: 'http://www.baidu.com:8080/abc/a-bc?a=1&b=2#abc',
    origin: 'http://www.baidu.com:8080',
    protocal: 'http:',
    host: 'www.baidu.com',
    port: '8080',
    pathname: '/abc/a-bc',
    search: '?a=1&b=2',
    hash: '#abc'
  })
})
