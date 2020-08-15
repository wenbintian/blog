# 你不知道的JavaScript(上)
## 第二部分 this 和对象原型
任何足够先进的技术都与魔法无异。
	---Arthur.C Clarke
### 1.this到底是什么
	this是**在运行时**进行绑定的，并不是在编写时绑定的，它的上下文取决于行数调用时的各种条件。
	this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
	this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200808171156985.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200808171242769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70)
### 2.如何判断this
	可以从以下方面进行判断：
 1. 函数是否在`new`中调用（`new`绑定）？如果是的话`this`绑定的是新创建的对象。`var bar = new foo()`
 2. 函数是否通过`call、apply`(显示绑定)或者硬绑定调用？如果是的话，`this`绑定的是指定的对象。`var bar = foo.call(obj2)`
 3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，`this`绑定的是哪个上下文对象。`var bar = obj1.foo()`
 4. 如果都不是的话，使用默认绑定。如果再严格模式下，就绑定到`undefined`，否则绑定到全局对象。`var bar = foo()`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200808171354367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70)
### 3. 被忽略的this
如果你把`null`或者`undefined`作为`this`的绑定对象传入`call、apply`或者`bind`，这些值在调用时会被忽略，实际应用的是默认绑定规则：

```javascript
function foo() {
	console.log(this.a)
}
var a = 2
foo.call(null) // 2
```
	那么什么情况下会传入null呢？
一种是非常常见的做法是使用`apply(..)`来“展开”一个数组，并当作参数传入一个函数。另一种是`bind(..)`可以对参数 进行柯里化（预先设置一些参数）：

```javascript
function foo(a,b) {
	console.log('a:' + a, 'b:' + b)
}
// 把数组“展开”成参数
foo.apply(null, [2, 3]) // a:2 b:3

//使用bind(..)进行柯里化
var bar = foo.bind(null, 2)
bar(3) // a:2 b:3
```

这两种方法都需要传入一个参数当作`this`的绑定对象。如果不关心`this`的话，你仍然需要传入一个占位符，这时`null`可能是一个不错的选择，如上。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200808171628987.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70)
### 4. 更安全的this
在  `JavaScript`中创建一个空对象最简单的方法是`Object.create(null)`。`Object.create(null)`和`{}`很像，但是并不会创建`Object.prototype`这个委托，所以它比`{}`“更空”。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200808171718278.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70)

赋值表达式 `p.foo = o.foo`的返回值是目标函数的引用，因此调用对象的位置是`foo()`而不是`p.foo()`或者`o.foo()`。使用的是默认绑定规则。
```javascript
function foo() {
	console.log(this.a)
}
var a = 2
var o = { a: 3, foo: foo }
var p = { a: 4 }
o.foo() // 3
(p.foo = o.foo)() // 2
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200808171844230.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70)
