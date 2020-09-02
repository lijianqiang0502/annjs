import sort from './index'


test('test sort', () => {
  expect(sort([1,2,11],'max')).toEqual([11,2,1]);
});
