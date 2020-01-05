// let add: (x: number, y: number) => number

// interface Add{
//   (x: number, y: number): number
// }
type Add = (x: number, y: number) => number

let add: Add = (a,b) => a + b

interface Lib{
  (): void;
  version: string;
  doSomething(): void;
}
function getlib(){
  let lib: Lib = (()=> {}) as Lib;
  lib.version = '1.0.1'
  lib.doSomething = ()=>{
    console.log(111);
  }
  return lib
}

let lib1 = getlib()
lib1()
lib1.doSomething()