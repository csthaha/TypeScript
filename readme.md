## TypeScript

### 什么是 typescript

> 官方定义：  拥有**类型系统**的 JavaScript 的超集。  

要点：

- 类型检查：ts 会在编译代码时，进行严格的类型检查。
- 语言扩展：ts 会包括来自 ES6 和未来提案中的特性，比如 异步操作，和装饰器，接口，抽象类
- 工具属性：ts 可以编译成标准的 JS ，可以在任何操作系统和浏览器中运行。

### 强类型语言和弱类型语言

- 强类类型语言：不允许改变变量的数据类型，除非进行强制类型转换。

  不允许程序在发生错误后继续执行。

- 弱类型语言： 比如 js。例子： 

```javascript
let x = 1;
let y = true;
x = y;
console.log(x); // true;
let z = 'a';
x = z;
console.log(x); // 'a'
```

### 静态类型语言和动态类型语言

- 静态类型语言：在编译阶段确认所有变量的类型
- 动态类型语言：在执行阶段确定所有变量的类型

![1576131614802](C:\Users\陈松涛\AppData\Roaming\Typora\typora-user-images\1576131614802.png)

### HelloWorld

全局安装 typescript：`npm i typescript -g`， 使用帮助命令 `tsc -h`

创建 ts 配置项： `tsc --init`


### 2020/09/02 coolua-chensongtao update
1. ts 中使用 jsx 必须做的两件事：
  给文件一个 .tsx 的扩展名
  启用 jsx 选项

2. 解析sass yarn add mini-css-extract-plugin css-loader sass-loader node-sass  -D
 - mini-css-extract-plugin 将把编译的所有 scss 编译成 css 并将它们放在一个新文件中，而不是内联它们。需要区别 extract-text-webpack-plugin
 - css-loader 将通过解析我们拥有的任何导入和URL来加载css
 - sass-loader 加载我们的sass或者scss
 - node-sass 将scss编译为 css

3. redux 已经自带了声明文件（.d.ts文件）， 因此不需要安装 @types/redux