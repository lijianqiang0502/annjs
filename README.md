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
