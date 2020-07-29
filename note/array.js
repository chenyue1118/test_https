## Array APi

### Array.form()
从一个类似数组或可以迭代对象创建一个新的，浅拷贝的数组示例
类似数组：拥有length属性和若干索引属性的任意对象
可迭代对象：可以获取对象中的元素，如Map、Set等
```
Array.form([1, 2, 3])
Array.form(new Set([1, 2, 3, 2, 1]))
```

### Array.isArray()
判断是否为数组  返回布尔值
```
Array.isArray([1])
Array.isArray({ a: 1 })
```

### Arrat.prototype.concat()
合并两个或多个数组，返回一个新数组
```
[1].concat([2])
```

### Array.prototype.every()
测试一个数组内的所有元素是否都能通过某个指定函数的测试。返回布尔值。
eg. 检验是否都不包含
```
[{a:1, b:2}, {a: 3, b:2}].every(item => item.a !=2)
```

### Array.prototype.fill()
用固定值填充开始索引至结束索引所有值。返回修改后的数组。
```
[1, 2, 3, 5].fill('fil', 2, 5)
```

### Array.prototype.filter()
返回通过函数测试的所有元素。返回数组
```
[].filter(item => item > 10)
```

### Array.prototype.find()
返回通过函数测试的第一项值。否则返回undefined
```
[{a:2, b:2}, {a: 3}, {a: 2, b:3}].find(item => item.a == 2)
```

### Array.prototype.findIndex()
返回通过函数测试的索引。否则返回 -1。

### Array.prototype.flat()
扁平化嵌套数组，会移除空项，可指定深度。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
```
[1, 2, [, 3, 4]].flat()

// 使用 reduce、concat 和递归展开无限多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr1, Infinity);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

### Array.prototype.flatMap()


### Array.prototype.includes()
是否包含指定值，返回布尔类型
```
[].includes('123')
```

### Array.prototype.indexOf()
返回在数组中可以找到给定元素的第一个索引，否则返回-1
```
[].indexOf(12)
```

### Array.prototype.join()
将数组所有元素连接为字符串，返回这个字符串。
如果元素为undefined或null 会转换为空字符串
```
[].join()
[].join('-')
```

### Array.prototype.keys()
返回一个包含数组中每个索引键的Array Iterator对象
```
// 索引迭代器会包含那些没有对应元素的索引
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

### Array.prototype.lastIndexOf()
返回指定元素在数组的最后一个索引，不存在返回-1
匹配元素时候时使用 '==='
```
[].lastIndexOf('a')
```
