let Stack =require('./stack')

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(5);
stack.push(8);

console.log(stack.peek())

stack.push(11);
console.log(stack.size()); // 输出3
console.log(stack.isEmpty()); // 输出false

stack.push(15)
stack.pop()
stack.pop()
console.log(stack.size()) // 输出2
console.log(stack.toString())

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))


let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols)

let decimalToBinary= require('./decimalToBinary')

console.log(decimalToBinary(233))
console.log(decimalToBinary(10))
console.log(decimalToBinary(1000))


let  baseConverter = require('./baseConverter')

console.log(baseConverter(100345,2))
console.log(baseConverter(100345,8))
console.log(baseConverter(100345,16))
console.log(baseConverter(100345,35))
