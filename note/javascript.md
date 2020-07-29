<!-- https://github.com/shfshanyue/Daily-Question -->

### 前端如何下载json文件
```
const json = {
  name: 'chen',
  age: 18
}
const str = JSON.stringify(json, null, 2);  // 文本缩进空格2

// 方案一：Text -> DataURL
const dataUrl = `data:,${str}`
download(dataUrl, 'demo.json')


// 方案二：Text -> Blob -> ObjectURL
const url = URL.createObjectURL(new Blob(str.split('')))
// new Blob([data], { type: 'application/json' })
download(url, 'demo1.json')

// 使用a链接下载
function download () {}
// document.body.removeChild(a)
// 调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用
// window.URL.revokeObjectURL(url)
```

### node 中 module.exports 与 exports 有什么区别
解释：exports 是 module.exports 的引用，如果 exports 没有重新赋值，则二者没有任何区别

### Blob对象
```
new Blob(data[, options])
参数data必须是数组
参数options是对Blod对象的配置属性，目前也只有type也就是相关的MIME需要设置type的值，'text/csv,charset=UTF-8'设置csv格式，并设置编码为UTF-8，'text/html'，设置成html格式
```
