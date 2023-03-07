/**
 * 栈的实际应用非常广泛。在回溯问题中，它可以存储访问过的任务或路径、撤销的操作(后 面的章节讨论图和回溯问题时，我们会学习如何应用这个例子)。Java 和 C#用栈来存储变量和方 法调用，特别是处理递归算法时，有可能抛出一个栈溢出异常(后面的章节也会介绍)。
 * 既然我们已经了解了 Stack 类的用法，不妨用它来解决一些计算机科学问题。本节，我们 将介绍如何解决十进制转二进制问题，以及任意进制转换的算法
 *  回溯问题
 * 从十进制到二进制
 * 要把十进制转化成二进制，我们可以将该十进制数除以 2(二进制是满二进一)并对商取整， 直到结果是 0 为止。举个例子，把十进制的数 10 转化成二进制的数字，过程大概是如下这样。
 */

const Stack = require('./stack')
function decimalToBinary(decNumber){
    const remStack = new Stack()
    let numbers = decNumber
    let rem
    let binaryString = ''

    while (numbers>0){
        rem = Math.floor(numbers%2)
        remStack.push(rem)
        numbers = Math.floor(numbers/2)
    }

    while (!remStack.isEmpty()){
        binaryString += remStack.pop().toString()
    }
    return binaryString
}



module.exports = decimalToBinary
