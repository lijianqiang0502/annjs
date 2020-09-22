###如何使用
`npm i @lijianqiang01/annjs`

`import {sort} from '@lijianqiang01/annjs'`

####使用说明
```
1.sort(arr, type)
    param:
        [arr] => 需要排序的数组
        [type] => 需要排序的类型  oneof(['max', 'min', 'z', 'a']) => 数字降序，数字升序，英文降序，英文升序
    example:sort([1,3,2], 'max') => [3,2,1]
```
```
2.objToQuery(obj)  
    param:
        [obj] => 需要转换成query字符串的对象
    example:{a:1, b:2} => "a=1&b=2" 
```
```
3.queryToObj(str)  
    param:
        [str] => 需要转成对象的query字符串
    example:"a=1&b=2" => {a:1, b:2}
```
```
4.LazyImage
    图片懒加载：
    let lazy = new LazyImage(selector);
    lazy.init();
```
```
5.LazyLoad
    触底加载：
    let lazy = new LazyLoad(selector, callback, delay);
    lazy.init();
```
```
6.debounce
    param:
        [fun] => 函数
        [delay] => 延迟
        [...args] => 参数
```
```
7.生成随机序列额
    param:
        [type] => 类型 num->数字, letter->字符+数字
        [length] => 长度
```
```
8.获取变量类型
    param: any: 变量类型
    return: Object Array等
```
