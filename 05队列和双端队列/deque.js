/**
 * 双端队列
 *
 * 在计算机科学中，
 * 双端队列的一个常见应用是存储一系列的撤销操作。
 * 每当用户在软件中进 行了一个操作，
 * 该操作会被存在一个双端队列中(就像在一个栈里)。
 * 当用户点击撤销按钮时， 该操作会被从双端队列中弹出，
 * 表示它被从后面移除了。在进行了预先定义的一定数量的操作后，
 * 9 最先进行的操作会被从双端队列的前端移除。
 * 由于双端队列同时遵守了先进先出和后进先出原 则，
 * 可以说它是把队列和栈相结合的一种数据结构。
 */
class  Deque {
    constructor() {
        this.count =0;
        this.lowestCount =0;
        this.items ={}
    }

    /**
     *  向双端队列的 前端添加元素
     * 由于已经实现了部分方法，我们将只专注于 addFront 方法的逻辑。addFront 方法的代码 如下所示。
     */
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element)
        }else  if (this.lowestCount>0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element
        }else {
            for(let i=this.count;i>0;i--){
                this.items[i]= this.items[i-1]
            }
            this.count++
            this.lowestCount =0
            this.items[0] = element
        }

    }


    /**
     * addBack(element):该方法在双端队列后端添加新的元素(实现方法和 Queue 类中的 enqueue 方法相同)。
     */

    addBack(element){
        this.items[this.count] = element
        this.count++
    }


    /**
     * removeFront():该方法会从双端队列前端移除第一个元素(实现方法和 Queue 类中的 dequeue 方法相同)。
     */

    /**
     * 从队列移除元素
     * 接下来要实现 dequeue 方法，该方法负责从队列移除项。由于队列遵循先进先出原则，最 先添加的项也是最先被移除的
     */
    removeFront(){
        if (this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete  this.items[this.lowestCount]
        this.lowestCount++;
        return  result
    }


    /**
     * removeBack():该方法会从双端队列后端移除第一个元素(实现方法和 Stack 类中的 pop 方法一样)。
     */

    removeBack(){
        if (this.isEmpty()){
            return  undefined
        }
        this.count --;
        const result = this.items[this.count];
        delete this.items[this.count]
        return  result
    }

    /**
     * peekFront():该方法返回双端队列前端的第一个元素(实现方法和 Queue 类中的 peek 方法一样)。
     *
     */

    peekFront(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    /**
     * peekBack():该方法返回双端队列后端的第一个元素(实现方法和 Stack 类中的 peek 方法一样)。
     */

    peekBack() {
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count - 1]
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


module.exports= Deque
