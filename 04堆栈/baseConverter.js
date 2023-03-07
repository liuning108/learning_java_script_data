/**
 * ，使之能把十进制转换成基数为 2~36 的任意进制。除了把十进制 数除以 2 转成二进制数，还可以传入其他任意进制的基数为参数，就像下面的算法这样。
 * @type {Stack|{}}
 */
const Stack = require('./stack')
function baseConverter(decNumber,base){
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}

    let numbers = decNumber
    let rem
    let baseString = ''

    if (!(base>=2 && base<=36)) {
        return  ""
    }

    while (numbers>0){
        rem = Math.floor(numbers%base)
        remStack.push(rem)
        numbers = Math.floor(numbers/base)
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }
    return baseString
}



module.exports = baseConverter
