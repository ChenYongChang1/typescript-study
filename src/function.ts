//函数定义
function add1(x: number, y: number){
  return x + y
}
let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y?: number): number
}
let add4_1: add4 = (x, y) => x + (y ? y : 0
  )
// console.log(add4_1(1, 2));
// console.log(add4_1(1));
function add5(x: number, y=0, z: number){
  return x+y+z
}
add5(1,undefined,2);

function add6(...rest: number[]): number;
function add6(...rest: string[]): string;
function add6(...rest: any[]): any {
  let first = rest[0]
  console.log(rest,first);
  if (typeof first === 'string'){
    return rest.join('')
  }
  if (typeof first === 'number'){
    return rest.reduce((pre: number, cur: number) => pre + cur)
  }
}
console.log(add6(1,2,3));
console.log(add6('a', 'b', 'c'));