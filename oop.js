
  
  // 表示一个二维向量
  /*function Vector(x, y) {
    this.x = x
    this.y = y
  }
  Vector.prototype.plus = function (v) {
    var x = this.x + v.x
    var y = this.y + v.y
    return new Vector(x, y)
  }
  Vector.prototype.minus = function (v) {
    var x = this.x - v.x
    var y = this.y - v.y
    return new Vector(x, y)
  }
  // Vector.prototype.length = function () {
  //   return Math.sqrt(this.x * this.x + this.y * this.y)
  // }
  Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
  })*/
class Vector{
  constructor(x, y){
    this.x=x;
    this.y=y;
  }
  plus(v){
    var x= this.x+v.x;
    var y= this.y=v.y;
    return new Vector(x,y);
  }
  minus(v){
    var x= this.x-v.x
    var y= this.y-v.y
    return new Vector(x,y)
  }
  get length() {
    return Math.sqrt(this.x*this.x+this.y*this.y)
  }
}
  var v1 = new Vector(1, 2)
  var v2 = new Vector(3, -4)

  // var v3 = v1.plus(v2)
  // var v4 = v2.minus(v1)

  // var l = v4.length()



  // 表示一个复数(complex number)
  class Complex {
    constructor(real, imag) {
      this.real = real
      this.imag = imag
    }
    plus(c) {
      var real = this.real + c.real
      var imag = this.imag + c.imag
      return new Complex(real, imag)
    }
    minus(c) {
      var real = this.real - c.real
      var imag = this.imag - c.imag
      return new Complex(real, imag)
    }
    multiple(c) {
      var real = this.real * c.real - this.imag * c.imag
      var imag = this.real * c.imag + this.imag * c.real
      return new Complex(real, imag)
    }
    div(c) {
      var helper = new Complex(c.real, -c.imag)
      var fenmu = c.multiple(helper).real
      var fenzi = this.multiple(helper)
  
      var real = fenzi.real / fenmu
      var imag = fenzi.imag / fenmu
  
      return new Complex(real, imag)
    }
    toString() {
      return '' + this.real + (this.imag > 0 ? "+" : '') + this.imag + 'i'
    }
  }
  // var c1 = new Complex(4, 5)
  // var c2 = new Complex(1, -2)

  // var c3 = c1.plus(c2)
  // var c4 = c1.minus(c2)
  // var c5 = c1.multiple(c2)
  // var c6 = c1.div(c2)

  // console.log(c6.toString()) // 2+3i

  // 
  // function Matrix() {

  // }


  // =================================================================
  // =================================================================
  // =================================================================
  // =================================================================
  // 以下作业写好后上传到： `https://[username].github.io/miao/oop.js`,
  // =================================================================
  // =================================================================
  // =================================================================
  // =================================================================


  // class LinkedList {
  //   private head
  //   private length;
  //   constructor() {
  //     this.head = null
  //     this.length = 0
  //   }
  //   pop() {
  //     this.head = xxx
  //   }
  // }
  // var l = new LinkedList()
  // l.head = 33
  // 表示一个单向链表
  function LinkedList() {
    this._head = null
    this._length = 0
  }
  // LinkedList.prototype -----> {constructor: LinkedList}

  LinkedList.prototype = {
    constructor: LinkedList,
    at: function(idx) {
      var p = this._head
      while(idx > 0 && p) {
        p = p.next
        idx--
      }
      if (p) {
        return p.val
      } else {
        return undefined
      }
    },
    set: function(idx, val) {
      var p = this._head
      while(idx > 0 && p) {
        p = p.next
        idx--
      }
      if (p) {
        p.val = val
      }
    },
    append: function(val) {
      var node = {
        val: val,
        next: null,
      }
      this._length++
      if (this._head == null) {
        this._head = node
        return this
      }
      var p = this._head
      while(p.next) {
        p = p.next
      }
      p.next = node
      return this
    },
    pop: function() {
      if (this._head == null) {
        return undefined
      }

      this._length--
      if (this._head.next == null) { // 链表只有一个结点时
        var result = this._head.val
        this._head = null
        return result
      }
      var p = this._head
      while(p.next.next) {
        p = p.next
      }
      var result = p.next.val
      p.next = null
      return result
    },
    prepend: function(val) {
      var node = {
        val: val,
        next: this._head
      }
      this._length++
      this._head = node
      return this
    },
    shift: function() {
      if (this._head == null) {
        return undefined
      }
      this._length--
      var result = this._head.val
      this._head = this._head.next
      return result
    },
    toArray: function() {
      var result = []
      var p = this._head
      while(p) {
        result.push(p.val)
        p = p.next
      }
      return result
    },
    toString: function() {
      return this.toArray().join('->')
    },
    get size() {
      return this._length
    }
  }

  // 返回链表第idx个结点的值
  // LinkedList.prototype.get = function(idx) {
  //   var p = this._head
  //   while(idx > 0 && p) {
  //     p = p.next
  //     idx--
  //   }
  //   if (p) {
  //     return p.val
  //   } else {
  //     return undefined
  //   }
  // }
  // // 设置链表第idx项的值为val
  // LinkedList.prototype.set = function(idx, val) {
  //   var p = this._head
  //   while(idx > 0 && p) {
  //     p = p.next
  //     idx--
  //   }
  //   if (p) {
  //     p.val = val
  //   }
  // }
  // // 在链表末尾新增一个结点，值为val
  // LinkedList.prototype.push = function(val) {
  //   var node = {
  //     val: val,
  //     next: null,
  //   }
  //   this._length++
  //   if (this._head == null) {
  //     this._head = node
  //     return this
  //   }
  //   var p = this._head
  //   while(p.next) {
  //     p = p.next
  //   }
  //   p.next = node
  //   return this
  // }
  // // 返回链表末尾结点的值，并删除末尾结点
  // LinkedList.prototype.pop = function() {
  //   if (this._head == null) {
  //     return undefined
  //   }

  //   this._length--
  //   if (this._head.next == null) { // 链表只有一个结点时
  //     var result = this._head.val
  //     this._head = null
  //     return result
  //   }
  //   var p = this._head
  //   while(p.next.next) {
  //     p = p.next
  //   }
  //   var result = p.next.val
  //   p.next = null
  //   return result
  // }
  // // 在链表头部新增一个结点，值为val
  // LinkedList.prototype.unshift = function(val) {
  //   var node = {
  //     val: val,
  //     next: this._head
  //   }
  //   this._length++
  //   this._head = node
  //   return this
  // }
  // // 返回链表第一个结点的值，并删除这一个结点
  // LinkedList.prototype.shift = function() {
  //   if (this._head == null) {
  //     return undefined
  //   }
  //   this._length--
  //   var result = this._head.val
  //   this._head = this._head.next
  //   return result
  // }
  // LinkedList.prototype.toArray = function() {
  //   var result = []
  //   var p = this._head
  //   while(p) {
  //     result.push(p.val)
  //     p = p.next
  //   }
  //   return result
  // }
  // LinkedList.prototype.toString = function() {
  //   return this.toArray().join('->')
  // }
  // Object.defineProperty(LinkedList.prototype, 'length', {
  //   get: function() {
  //     return this._length
  //   }
  // })



  // 表示一个集合（集合中元素没有序，但不能重复）
  // 构造函数可选的可以传入集合中的初始值，但会被去重后存放
  function MySet(initalValues = []) {
    this._elements = []
    for (var val of initalValues) {
      this.add(val)
      // if (!this._elements.includes(val)) {
      //   this._elements.push(val)
      // }
    }
  }
  // 向集合中添加元素
  MySet.prototype.add = function(value) {
    if (!this._elements.includes(value)) {
      this._elements.push(value)
    }
    return this
  }
  // 从集合中删除value元素
  MySet.prototype.delete = function(value) {
    var idx = this._elements.indexOf(value)
    if (idx >= 0) {
      this._elements.splice(idx, 1)
    }
    return this
  }
  
  // 获取集合中的元素用 c.size，它是一个getter
  Object.defineProperty(MySet.prototype, 'size', {
    get: function() {
      return this._elements.length
    }
  })

  // 清空集合中的所有元素
  MySet.prototype.clear = function() {
    this._elements = []
    return this
  }

  // 判断集合中是否存在某元素
  MySet.prototype.has = function(value) {
    return this._elements.includes(value)
  }
  // 遍历集合中的元素（顺序无所谓）
  MySet.prototype.forEach = function(func) {
    for (var value of this._elements) {
      func(value)
    }
  }

  // var c = new MySet() //初始化一个空集合
  // c.add(5)
  // c.add(5)
  // c.size // 1
  // c.add(8)
  // c.size // 2
  // c.has(5) // true
  // c.has(999) // false
  // c.delete(5)
  // c.size // 1
  // c.delete(9)
  // c.size // 1




  // 表示一个映射
  // 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
  function MyMap(initPairs = []) {
    this._pairs = []
    
    for (var pair of initPairs) {
      var key = pair[0]
      var val = pair[1]
      this.set(key, val)
    }
  }
  MyMap.prototype = {
    // 设置映射中的key所对应的值为val
    set(key, val) {
      for (var i = 0; i < this._pairs.length; i += 2) {
        if (this._pairs[i] === key) {
          this._pairs[i + 1] = val
          return this
        }
      }
      this._pairs.push(key, val)
      return this
    },
    // 获取这个映射中key所对应的val
    get(key) {
      for (var i = 0; i < this._pairs.length; i += 2) {
        if (this._pairs[i] === key) {
          return this._pairs[i + 1]
        }
      }
      return undefined
    },
    // 判断这个映射中是否存在这个key的映射
    has(key) {
      for (var i = 0; i < this._pairs.length; i += 2) {
        if (this._pairs[i] === key) {
          return true
        }
      }
      return false
    },
    // 删除这个映射中key及其映射的值的这一对儿
    // 返回是否成功删除了一对儿映射
    delete(key) {
      for (var i = 0; i < this._pairs.length; i += 2) {
        if (this._pairs[i] === key) {
          this._pairs.splice(i, 2)
          return true
        }
      }
      return false
    },
    // 清空这个映射中所有的映射对儿
    clear() {
      this._pairs = []
      return this
    },
    // 获取这个映射中映射对儿的数量
    get size() {
      return this._pairs.length / 2
    },
    // 遍历这个映射中所有的映射对儿
    forEach(iterator) {
      for (var i = 0; i < this._pairs.length; i += 2) {
        iterator(this._pairs[i + 1], this._pairs[i])
      }
    },
  }

  var m = new MyMap() 

  // 表示一个栈：即后进先出，先进后出
  function Stack() {
    this._elements = []
  }
  // 向栈中增加元素
  Stack.prototype.push = function(val) {
    this._elements.push(val)
  }
  // 从栈中取出元素并删除栈顶元素
  Stack.prototype.pop = function() {
    return this._elements.pop()
  }
  // 查看但不删除栈顶元素
  Stack.prototype.peek = function() {
    return this._elements[this._elements.length - 1]
  }
  Object.defineProperty(Stack.prototype, 'size', {
    get: function() {
      return this._elements.length
    }
  })

  // stack.size 获取栈中元素的数量

  // var stack = new Stack()
  // stack.in(1)
  // stack.in(2)
  // stack.size // 2
  // stack.in(3)
  // stack.size // 3
  // stack.out() // 3
  // stack.out() // 2
  // stack.in(5)
  // stacik.out() // 5 


  // 表示一个队列：即先进先出，后进后出
  function Queue() {
    this._head = null
    this._tail = null
    this._length = 0
  }
  
  // 向队列中增加元素
  Queue.prototype.add = function(val) {
    var node = {
      val: val,
      next: null,
    }
    this._length++
    if (this._head == null) {
      this._head = this._tail = node
      return this
    }
    this._tail.next = node
    this._tail = node
    return this
  }
  // 从队头取出元素并删除队头元素
  Queue.prototype.pop = function() {
    if (this._head == null) {
      return undefined
    }
    this._length--
    if (this._head == this._tail) {
      var result = this._head.val
      this._head = this._tail = null
      return result
    }
    var result = this._head.val
    this._head = this._head.next
    return result
  }
  // 查看队头元素（没有查看队尾元素的功能）
  Queue.prototype.peek = function() {
    return this._head.val
  }
  // 以及queue.size获取队列的长度
  Object.defineProperty(Queue.prototype, 'size', {
    get: function() {
      return this._length
    }
  })


  /**
   * 先写构造函数，然后再写原型上的方法
   * 这种写一个类型的方式有诸多问题：
   * 0 整体代码至少要写成两段（构造函数一段，原型一段）
   * 1 首先就是很繁琐
   *    要多次重复书写Xxxx.prototype.xxx = function(){}
   * 2 这些原型上的方法/getter/setter/属性都是可枚举的
   *    一般情况这些来自原型的属性可枚举不会有什么问题
   *    因为一般当对象不做为动态映射的时候，我们不会用for in遍历它
   *    但是语言自带的各种原型上的属性都是不可枚举的
   * 3 在写getter/setter时也很繁琐
   * 4 私有属性只能靠约定来达成。在对象外部只要想还是能访问的
   * 
   * 在Ecma Script 6里，为我们提供了一种书写一个类型的新的写法
   * 该写法跟c++，java非常类似
   * 
   * 
   */
  // class是关键字，用于声明一个类/类型/class
  class Stack2 {
    #values = []// 私有属性必须先声明才能在构造函数或者其它方法中使用，非私有属性不用这样
    // constructor() {
    //   // 如果构造函数里没有代码，则可以省掉构造函数
    // }
    #size = 0 
    len = 9 //  class fields语法（类字段语法），借鉴自java
    push(value) {
      this.#values.push(value)
      return this
    }
    pop() {
      return this.#values.pop()
    }
    peek() {
      return this.#values.at(-1)
    }
    get size() {
      return this.#values.length
    }
  }

  // var s = new Stack2()
  // console.log(s.#values)


  /**
   * 语法错误：
   *    语法错误是代码写错了，整个代码是完全不执行的
   *    因为代码在执行前会先检查语法，如果有语法错误，则直接报语法错误，代码不执行
   * 
   * 运行时错误：
   *    代码语法没问题，但是运行时出现了错误
   *      比如把不是函数的东西当函数
   *      使用不存在的变量
   *      
   * 
   * 
   */

  /**
   * 
   * 面向对象三大特性：
   *  封装：将表示一个复杂事物的所有信息及这个事物能进行的操作都放到一起
   *  继承
   *  多态：只有对象有组期望的接口，它就可以接收某段代码。画表格程序示例即是如此
   * 
   * 
   */

  // function Creature(born) {
  //   this.alive = true
  //   this.born = born
  // }
  // function Dog(name, born) {
  //   Creature.call(this, born)
  //   this.name = name
  // }
  // function TeddyDog(name, born) {
  //   Dog.call(this,name,born)
  //   this.type = 'teddy'
  // }

  class Creature {
    constructor() {
      this.alive = true
      this.age = age
    }
    grow() {
      this.age++
    }
  }

  class Dog extends Creature {
    constructor(name, age) {
      super(age)//super直接调用表示调用父类的构造函数，父类的构造函数需要接什么参数都可以在这里传
      // super.xxx()可以调用父类中的方法，即使自身有这个方法，super.xxx()也是直接调用父类中的这个方法
      // super()调用结束之前不能使用this（这一点跟书上不一样）
      this.name = name
    }
    bark() {
      console.log("wang wang, I'm " + this.name)
    }
  }

  class TeddyDog extends Dog {
    constructor(name,age) {
      super(name, age)
      this.type = 'teddy'
    }
    xxx() {

    }
  }

  var 某个生物 = new Creature()
  var 某条细狗 = new Dog()
  var 某只泰迪 = new TeddyDog()

  某只泰迪 instanceof TeddyDog
  某只泰迪 instanceof Dog
  某只泰迪 instanceof Creature

  某条细狗 instanceof TeddyDog
  某条细狗 instanceof Creature

  某条细狗 instanceof Object

  // a instanceof b 实际上判断的是顺着a的原型链能否最终找到b.prototype
  // instanceof 只能判断对象，不能判断原型类型

  /**
   * 总结js中的类型判断方法
   * typeof 只能区分几种原型类型
   * Object.prototype.toString  这个能区分所有系统自带的类型，但不能区分自己写的class
   * instanceof 能区分继承关系，只对对象有用，对原始类型没用
   */



  // 书本上说，你完全可以在没有继承的情况下使用多态
  // 但实际上，在某些语言里（java），想使用多态，必须先存在继承关系
  // Rust，js，py则不用继承也可以使用到多态，只要各种毫无关系的类型都有同一组接口即可接入同一段代码



</script>