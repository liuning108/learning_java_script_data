/**
 * 队列是遵循先进先出(FIFO，也称为先来先服务)原则的一组有序的项。队列在尾部添加新
 * 元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
 *
 * 生活实例
 * 在电影院、自助餐厅、杂货店收银台，我们都会排队。排在第一位的人会先接受服务。
 *
 *
 * 首先需要一个用于存储队列中元素的数据结构。我们可以使用数组，就像上一章的 Stack 类那样。但是，为了写出一个在获取元素时更高效的数据结构，我们将使用一个对象来存储我们 的元素(行{3})。你会发现 Queue 类和 Stack 类非常类似，只是添加和移除元素的原则不同。
 */


class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /**
     * 首先要实现的是 enqueue 方法。该方法负责向队列添加新元素。此处一个非常重要的细节
     * 是新的项只能添加到队列末尾。
     */

    enqueue(element){
        this.items[this.count] = element
        this.count++
    }

    /**
     * 从队列移除元素
     * 接下来要实现 dequeue 方法，该方法负责从队列移除项。由于队列遵循先进先出原则，最 先添加的项也是最先被移除的
     */
    dequeue(){
        if (this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete  this.items[this.lowestCount]
        this.lowestCount++;
        return  result
    }

    /**
     * 查看队列头元素
     * 现在来为我们的类实现一些额外的辅助方法。如果想知道队列最前面的项是什么，可以用
     * peek 方法
     */
    peek(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }


    /**
     * 检查队列是否为空并获取它的长度
     * isEmpty 方法。如果队列为空，它会返回 true，否则返回 false(注意该方法和 Stack 类里的一样)。
     */
    isEmpty(){
        return this.size() ===0;
    }


    /**
     * 所以要实现 size 方法的话，我们只需要返回这个差值即可。
     */
    size(){
        return this.count-this.lowestCount
    }

    /**
     * 清空队列
     */
    clear(){
        this.items ={}
        this.count = 0
        this.lowestCount = 0
    }


    toString(){
        if (this.isEmpty()){
            return ""
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount+1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`
        }
        return  objString
    }



}


module.exports = Queue


