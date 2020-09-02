import objectToQuery from './index'


describe('test objectToQuery',() => {
    it('test one', () => {
      expect(objectToQuery({a:"231421412",b:2})).toEqual("a=231421412&b=2");
    })
    it('test two', () => {
      expect(objectToQuery({a:3214214,b:421})).toEqual("a=3214214&b=421");
    })
})

