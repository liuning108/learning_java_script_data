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
