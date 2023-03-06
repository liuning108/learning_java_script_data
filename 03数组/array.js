/**
 * 创建和初始化数组
 */
let daysOfWeek = new Array(); // {1}
daysOfWeek = new Array(7); // {2}
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3}
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


/**
 * 访问元素和迭代数组
 */

for (let i = 0;i<daysOfWeek.length;i++){
    console.log(daysOfWeek[i])
}
/**
 * 添加元素
 */
let numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[numbers.length] = 10
numbers.push(11)
numbers.push(12,13)
console.log(numbers)

/**
 * 现在，我们希望在数组中插入一个新元素(数1)，不像之前那样插入到最后，而是放到数 组的开头。为了实现这个需求，首先要腾出数组里第一个元素的位置，把所有的元素向右移动一 位。我们可以循环数组中的元素，从最后一位(长度值就是数组的末尾位置)开始，将对应的前 一个元素(i-1)的值赋给它(i)，依次处理，最后把我们想要的值赋给第一个位置(索引 0) 上。我们可以将这段逻辑写成一个函数，甚至将该方法直接添加在 Array 的原型上，使所有数 组的实例都可以访问到该方法。下面的代码表现了这段逻辑。
 */

numbers.unshift(-1)

console.log(numbers)

/**
 * unshift 原理实现
 */
Array.prototype.insertFirstPosition = function (value){
    for (let i =this.length;i>=0;i--){
        this[i]=this[i-1]
    }
    this[0] = value
}
numbers.insertFirstPosition(-2);
numbers.insertFirstPosition(-3);
console.log(numbers)


/**
 * 删除元素
 */
numbers.pop()
console.log(numbers)


/**
 * 从数组开头删除元素
 */
  for (let i =0;i<numbers.length;i++){
      numbers[i] = numbers[i+1];
  }
  console.log(numbers)

/**
 *
 * 可以看到，我们只是把数组第一位的值用第二位覆盖了，并没有删除元素(因为数组的长度 和之前还是一样的，并且多了一个未定义元素)。
 * 要从数组中移除这个值，还可以创建一个包含刚才所讨论逻辑的方法，叫作 removeFirst- Position。但是，要真正从数组中移除这个元素，我们需要创建一个新的数组，将所有不是 undefined 的值从原来的数组复制到新的数组中，并且将这个新的数组赋值给我们的数组。要 完成这项工作，也可以像下面这样创建一个 reIndex 方法。
 */
Array.prototype.reIndex = function (myArray) {
    const newArray =[]
    for(let i =0;i<myArray.length;i++){
        if (myArray[i]!==undefined) {
            newArray.push(myArray[i])
        }
    }
    return newArray
}


Array.prototype.removeFirstPosition = function (){
    for (let i =0;i<this.length;i++){
        this[i] = this[i+1]
    }
    return this.reIndex(this)
}
numbers = numbers.removeFirstPosition()
console.log(numbers)

numbers.shift()
console.log(numbers)


//在任意位置添加或删除元素
numbers.splice(5,3);
console.log(numbers)

//我们想把数 2、3、4 插入数组里，放到之前删除元素的位置上
numbers.splice(5,3,2,3,4);
console.log(numbers)
