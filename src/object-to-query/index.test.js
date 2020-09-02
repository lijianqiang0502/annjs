import objectToQuery from './index'


test('test objectToQuery', () => {
  expect(objectToQuery({a:1,b:2})).toEqual("a=1&b=2");
});
