abstract class Animal {
  constructor(public name: string){
    this.name = name;
  }
  eat(){
    console.log(this.name+' eat');
  }
  abstract sleep(): void;
}

class Dog1 extends Animal{
  constructor(name: string){
    super(name)
  }
  run() {}
  sleep(){
    console.log('dog sleep');
  }
}

let dog1 = new Dog1('wangwang')
dog1.eat()

class Cat extends Animal{
  constructor(name: string){
    super(name)
  }
  sleep(){
    console.log('cat sleep');
  }
}

let cat =new Cat('miaomiao')
let animals: Animal[] =[dog1, cat]
animals.forEach(i =>{
  i.sleep() //多态
})

// 方法链式调用
class WorkFlow {
  step1(){
    console.log('step1');
    return this
  }
  step2(){
    console.log('step2');
    return this
  }
}
new WorkFlow().step1().step2()

class Myflow extends WorkFlow{
  next(){
    console.log('next');
    return this
  }
}
new Myflow().next().step1().next().step2()