/**
 * 链表存储有序的元素集合，
   但不同于数组，链表中的元素在内存中并不是连续放置的。
   每个 元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成。
   下图展 示了一个链表的结构。

 还有一个可能是用来说明链表的最流行的例子，那就是火车。
 一列火车是由一系列车厢(也 称车皮)组成的。每节车厢或车皮都相互连接。
 你很容易分离一节车皮，改变它的位置、添加或 移除它。
 下图演示了一列火车。每节车皮都是链表的元素，车皮间的连接就是指针。
 */

function defaultEquals(a,b) {
    return a===b
}

const Node = require('./Node')
class  Linkedlist {
    constructor(equlasFn = defaultEquals) {
        this.count = 0 // 它用来存储链表中的 元素数量
        this.head = null
        this.equalsFn = equlasFn //用 linkedList 类的开发者可以自行传入用于比较两个 JavaScript 对象或值是否相等的自定义函 数。

    }

    /**
     * 1. 向链表尾部添加元素
     * 向 LinkedList 对象尾部添加一个元素时，可能有两种场景:链表为空，添加的是第一个 元素;链表不为空，向其追加元素。
     */
    push(element){
        const node = new Node(element)
        let current
        if (this.head==null){
            this.head = node
        } else  {
            current = this.head
            //获得最后一项
            while (current.next!=null){
                current = current.next
            }
            // 将其 next 赋为新元素，建立链接
            current.next = node
        }

        this.count++
    }

    /**
     * 从链表中移除元素
     * 现在，让我们看看如何从 LinkedList 对象中移除元素。
     * 我们要实现两种 remove 方法: 第一种是从特定位置移除一个元素(removeAt)，第二种是根据元素的值移除元素(稍后我们会 展示第二种 remove 方法)。和 push 方法一样，对于从链表中移除元素也存在两种场景:第一 种是移除第一个元素，第二种是移除第一个元素之外的其他元素。
     */
    removeAt(index){
        if(index>=0 && index<this.count) {
            let current = this.head
            if (index===0){
                this.head =current.next
            }else {
                let previous;
                // for (let i =0;i<index;i++){
                //     previous = current
                //     current =current.next
                // }
                previous =this.getElementAt(index-1)
                current = previous.next
                previous.next = current.next
            }
            this.count --
            return  current.element
        }
        return undefined
    }


    /**
     * 循环迭代链表直到目标位置
     * 在 remove 方法中，我们需要迭代整个链表直到到达我们的目标索引 index(位置)。循环
     * 到目标 index 的代码片段在 LinkdedList 类的方法中很常见
     * @param index
     */
    getElementAt(index){
        if (index>=0 && index<=this.count){
            let current = this.head
            for(let i =0 ;i<index && current !=null;i++){
                current =current.next
            }
            return  current
        }
        return undefined
    }


    /**
     * 在任意位置插入元素
     * 接下来，我们要实现 insert 方法。使用该方法可以在任意位置插入一个元素。我们来看一
     * 看它的实现。
     */
    insert(element,index){
        if(index>=0 && index<=this.count) {
            const node = new Node(element)
            if (index == 0 ){
                const  current = this.head
                node.next  = current
                this.head = node
            } else {
                const  previous = this.getElementAt(index-1)
                const current = previous.next
                node.next = current
                previous.next= node
            }
            this.count++
            return true
        }
        return  false

    }


    /**
     * indexOf 是我们下一个要实现的方法。indexOf 方法接收一个元素的值，如果在链表中找 4
     * 5. indexOf 方法:返回一个元素的位置
     * 到了它，就返回元素的位置，否则返回-1。
     */
    indexOf(element){
        let  current = this.head
        for (let i =0 ;i<this.count && current!=null;i++){
            if (this.equalsFn(element,current.element)){
                return  i
            }
            current =current.next
        }
        return -1;
    }


    /**
     * 6. 从链表中移除元素
     * 创建完 indexOf 方法之后，我们可以来实现其他方法，比如 remove 方法。
     */

    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    /**
     * size 方法返回了链表的元素个数。和我们在前面章节实现的类不同，由于 LinkedList 是
     * 我们从头构建的类，链表的 length 变量是在内部控制的。
     * @returns {number}
     */
    size(){
        return this.count
    }

    isEmpty(){
        return this.size() === 0;
    }


    /**
     * head 变量是 LinkedList 类的私有变量(我们知道，JavaScript 还不支持真正的私有属性， 8 但是为了教学需要，我们把实例的属性看作私有的，假设使用我们的类的开发者只会使用类和方
     *  法)。如果我们要在类的实现外部迭代链表，就需要提供一种获取类的第一个元素的方法。
     * @returns {null}
     */
    getHead(){
        return this.head
    }


    /**
     *  toString 方法会把 LinkedList 对象转换成一个字符串。下面是 toString 方法的实现。
     */
    toString(){
        if (this.head ==null){
            return  ''
        }
        let objString =`${this.head.element}`
        let current = this.head.next
        for (let i = 1;i<this.size() && current!=null ;i++){
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }




}

module.exports = Linkedlist
