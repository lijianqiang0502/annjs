import queryToObject from './index'


test('test queryToObject', () => {
  expect(queryToObject("a=1&b=2")).toEqual({'a': '1','b': '2'});
});
