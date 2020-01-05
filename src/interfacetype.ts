interface List {
  readonly id: number;   //只读属性
  name: string;
  [x: string]: any; //字符串索引签名
  age?:number;     //可选属性
}
interface Result {
  data: List[]
}
function render(result: Result){
  result.data.forEach(value =>{
    console.log(value.id,value.name);
  })
}
let result = {
  data: [
    {
      id:1,
      name:'A'
    },
    {
      id:2,
      name:'B'
    },
  ]
}
render(result)

interface StringArray{
  [index:number]: string
}
let chars:StringArray = ['A', 'B']
interface Names{
  [x: string]: string;
  [z: number]: string;
  // [y: number]: number;
}