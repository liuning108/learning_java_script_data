const  Queue = require('./queue')

const queue = new Queue()
console.log(queue.isEmpty())


queue.enqueue("John")
queue.enqueue("Jack")
console.log(queue.toString())

//添加另一个元素。
queue.enqueue("Camila")

//再执行一些其他命令。
console.log(queue.toString());
// John, Jack, Camila
console.log(queue.size());// 输出3
console.log(queue.isEmpty()); // 输出false
queue.dequeue();//出队列
queue.dequeue();

console.log(queue.toString())


console.log('------Deque--------')
const Deque = require('./deque')

const deque = new Deque()
console.log(deque.isEmpty())
deque.addBack("John")
deque.addBack("Jack")
deque.addBack("Camila")
console.log(deque.toString()); // John, Jack
console.log(deque.size())
console.log(deque.isEmpty())
deque.removeFront()
console.log(deque.toString())
deque.removeBack()
console.log(deque.toString())
deque.addFront("John")
console.log(deque.toString())


/**
 * 循环队列——击鼓传花游戏
 */
function hotPotato(elementsList,num){
    const queue = new Queue();
    const elimitatedList = [];
    for(let i = 0;i<elementsList.length;i++){
        queue.enqueue(elementsList[i])
    }

    //Core
    while (queue.size() > 1){
        for (let i =0 ;i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }

    return {
        eliminated: elimitatedList,
        winner: queue.dequeue() // {5}
    }

}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name=>{
    console.log(`${name}在击鼓传花游戏中被淘汰`)
})
console.log(`胜利者:${result.winner}`)

/**
*回文检查器 双端队列来解决问题。
 * 回文是正反都能读通的单词、词组、数或一系列字符的序列，
 * 例如 madam 或 racecar。
*/


function palindromeChecker(aString){
    if (
        aString===undefined || aString===null ||
        (aString!==null && aString.length==0)
    ){
        return false
    }
    const deque  = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar,lastChar;
    for (let i=0;i<lowerString.length;i++){
        deque.addBack(lowerString.charAt(i))
    }
    //core
    while (deque.size()>1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if(firstChar !==lastChar) {
            isEqual = false;
        }
    }
    return  isEqual
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a caror a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
