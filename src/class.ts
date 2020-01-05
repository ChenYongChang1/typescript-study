class Dog{
  // private constructor(name: string){  不能被实例化不能继承
  // protected constructor(name: string){   不能被实例化 只能继承  ，相当于生成了个基类
  constructor(name: string){ 
    this.name = name
  }
  public name: string
  run() {}
  private pri(){}   //私有成员
  protected pro(){}  //只能在自己和子类中调用不可在实例中调用
  readonly legs : number = 4;   //只读 不能被更改
  static food: string = 'bones'  // 只能通过类名来调用 可以被继承
}
console.log(Dog.prototype);
let dog = new Dog('wangwang');
// dog.pri()
// dog.pro()

console.log(dog);

class Husky extends Dog {
  // public 构造方法里面加  这样可以直接生成的是实例的属性 不用在下面定义
  constructor (name: string, public color: string){
    super(name)
    this.color = color
    this.pro()
  }
  // color:string
}
