//表示一个二维向量
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

