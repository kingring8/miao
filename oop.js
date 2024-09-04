
表示一个二维向量
class Vector2D{
  constructor(x,y){
    this.x=x
    this.y=y
  }
  add(vector){
    return new Vector2D(this.x+vector.x,this.y+vector.y)
  }
  subtract(vector){
    return new Vector2D(this.x-vector.x,this.y-vector.y)
  }
  length(vector){
    return Math.sqrt(this.x**2+this.y**2)
  }
}
//复数
class Complex {
  constructor(re, im) {
      this.re = re;
      this.im = im;
  }

  add(c) {
      return new Complex(this.re + c.re, this.im + c.im);
  }

  sub(c) {
      return new Complex(this.re - c.re, this.im - c.im);
  }

  mul(c) {
      const re = this.re * c.re - this.im * c.im;
      const im = this.re * c.im + this.im * c.re;
      return new Complex(re, im);
  }

  div(c) {
      const conj = new Complex(c.re, -c.im);
      const denom = c.mul(conj).re;
      const num = this.mul(conj);
      return new Complex(num.re / denom, num.im / denom);
  }

  toString() {
      return `${this.re}${this.im >= 0 ? '+' : ''}${this.im}i`;
  }
}

//表示单项链表
class LinkedList {
  constructor(){
    this.head=null
    this.length=0
  }
  class(idx){
    this.idx=idx
    this.next=null
  }
  //返回链表底idx个节点的值
  at(idx){
     let current = this.head;
     let currentIndex=0

     while(current!==null){
      if(currentIndex ===idx){
        return current.value
      }
      current=current.next
      currentIndex++
     }
     return null
    }
   
//设置链表第idx项的值,为val
set(idx,val){
  let current=this.head
  let currentIndex=0
  while(current!==null){
    if(currentIndex===idx){
      current.value=val
      return true
    }
    current=current.next
    currentIndex++
  }
  return false
  
}




//在链表末尾新增一个节点,值为val
append(val){
  const newNode=new Node(val)
  if(this.head===null){
    this.head=newNode
  }else{
    let current=this.head
    while(current.next !==null){
      current=current.next
    }
    current.next=newNode
  }
  this.length++
  return true
}


//返回并删除链尾节点的值,并删除末尾第一个节点
removeLast(){
  if(this.head ===null){
    return null
  }
  if(this.head.next ===null){
    const value=this.head.value
  this.head =null
  this.length--
  return value
}
let current= this.head
while(current.next.next!==null){
  current=current.next
}
const value =current.next.value
current.next=null
this.length--
return value
}


//toArray
toArray(){
let array=[]
let current=this.head
while(current){
  array.push(current.value)
  current=current.next
}
return array
}

toString(separator="->"){
  let result=""
  let current=this.head
  while(current){
    result +=current.value
    if(current.next){
      result +=separator
    }
    current=current.next
  }
  return result
}
 get size(){
  return this._length
 }
}
//表示一个集合()
class MySet{
  constructor(initalValues= []){
  this._elements=[]
  for(var val of initalValues){
    if (!this._elements.includes(val)){
      this._element.push(val)
    }
  }

}
 

//向集合中添加元素
add(item){
  if(!this._elements.includes(item)){
    this._elements.push(item)
  }
  return this
}


//删除
delete (item){
  var idx= this._elements.indexOf(item)
    if(idx>=0){
      this._elements.splice(idx, 1)
    }
  }
//获取元素.从c.size
get size(){
  return this._elements.length
}


//清空集合中的所有元素
clear(){
  this._elements=[]
  return this
}


//判断集合中是否存在某元素
has(item){
  return this._elements.includes(item)
}

//遍历集合中的元素(顺序无所谓)
forEach(func){
  for (var value of this._elements){
    func(value)
  }
}
}


