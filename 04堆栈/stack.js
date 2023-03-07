/**
 * 栈是一种遵从 后进先出(LIFO) 原则的有序集合。新添加或待删除的元素都保存在栈的同
 * 一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。
 *
 *
 *  push(element(s)):添加一个(或几个)新元素到栈顶。
 *  pop():移除栈顶的元素，同时返回被移除的元素。
 *  peek():返回栈顶的元素，不对栈做任何修改(该方法不会移除栈顶的元素，仅仅返回它)。  isEmpty():如果栈里没有任何元素就返回 true，否则返回 false。
 *  clear():移除栈里的所有元素。
 *  size():返回栈里的元素个数。该方法和数组的 length 属性很类似。
 *
 */
const _items = Symbol('stackItems');

const items = new WeakMap(); // {1}
class Stack{

    #esCount = 0

    constructor() {
        this.count =0
        this.items = {}
        this[_items] = [];
        items.set(this,[])
    }

    /**
     * 我们要实现的第一个方法是 push。该方法负责往栈里添加新元素，有一点很重要:该方法
     * 只添加元素到栈顶，也就是栈的末尾。push 方法可以如下这样写。
     */
    push(element){
      this.items[this.count] = element
      this.count++
    }

    /**
     * 从栈移除元素
     * 接着，我们来实现 pop 方法。该方法主要用来移除栈里的元素。栈遵从 LIFO 原则，因此移 出的是最后添加进去的元素。因此，我们可以用上一章讲数组时介绍的 pop 方法。栈的 pop 方 法可以这样写:
     */

    pop(){
        if (this.isEmpty()){
            return  undefined
        }
        this.count --;
        const result = this.items[this.count];
        delete this.items[this.count]
        return  result
    }


    /**
     * 查看栈顶元素 现在，为我们的类实现一些额外的辅助方法。如果想知道栈里最后添加的元素是什么，可以
     * 用 peek 方法。该方法将返回栈顶的元素。
     */

    peek() {
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count - 1]
    }

    /**
     * 检查栈是否为空
     * 下一个要实现的方法是 isEmpty，如果栈为空的话将返回 true，否则就返回 false。
     */

    isEmpty(){
        return this.count === 0
    }

    size(){
        return this.count
    }

    /**
     * 清空栈元素
     * 最后，我们来实现 clear 方法。clear 方法用来移除栈里所有的元素，把栈清空。实现该
     * 方法最简单的方式如下
     */
    clear(){
        this.count =0
        this.items={}
    }

    /**
     * 在数组版本中，我们不需要关心 toString 方法的实现，因为数据结构可以直接使用数组已 经提供的 toString 方法。对于使用对象的版本，我们将创建一个 toString 方法来像数组一 样打印出栈的内容
     */
    toString(){
        if (this.isEmpty()){
            return ""
        }
        let objString = `${this.items[0]}`
        for (let i =1 ; i<this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return  objString
    }

}
module.exports =Stack

