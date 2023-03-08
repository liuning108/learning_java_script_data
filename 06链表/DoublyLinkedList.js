const Node = require('./Node')
const LinkedList = require('./linkedlist')
/**
 * DoublyLinkedList 类是一种特殊的 LinkedList 类，
 * 我们要扩展 LinkedList 类(行 {4})。
 * 这表示 DoublyLinkedList 类将继承(可访问)LinkedList 类中所有的属性和方法。
 * 一开始，在 DoublyLinkedList 的构造函数中，
 * 我们要调用 LinkedList 的构造函数(行{5})，
 * 它会初始化 equalsFn、count 和 head 属性。另外，
 * 我们也会保存对链表最后一个元素的引用
 * (tail——行{6})。
 */
class DoublyNode extends  Node {
    constructor(element ,next,prev) {
        super(element,next);
        this.prev = prev
    }
}
function defaultEquals(a,b) {
    return a===b
}

class  DoublyLinkedList extends  LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined
    }

    /**
     *  在任意位置插入新元素
     * 向双向链表中插入一个新元素跟(单向)链表非常类似。区别在于，链表只要控制一个 next 指针，
     * 而双向链表则要同时控制 next 和 prev(previous，前一个)这两个指针。在 DoublyLinkedList 类中，我们将重写 insert 方法，
     * 表示我们会使用一个和 LinkedList 类 中的方法行为不同的方法
     */

    insert(element,index){
        if (index>=0 && index<=this.count){
            const node = new DoublyNode(element)
            let current = this.head
            if (index == 0 ){
                if (this.head==null) {
                    this.head = node
                    this.tail = node
                }else {
                    node.next = this.head
                    current.prev = node
                    this.head =node
                }
            } else if (index == this.count) {
                current =this.tail
                current.next =node
                node.prev = current
                this .tail = node
            }else {
                const previous = this.getElementAt(index-1)
                current = previous.next
                node.next = current
                previous.next= node
                current.prev=node
                node.prev = previous

            }
            this.count++
            return true

        }
        return  false

    }

    /**
     * 从任意位置移除元素 从双向链表中移除元素跟链表非常类似。唯一的区别就是，还需要设置前一个位置的指针。
     * 我们来看一下它的实现。
     */
    removeAt(index) {
        if(index>0 && index<this.count){
            let current = this.head
            if (index==0){
                this.head = current.next
                // 如果只有一项，更新tail // 新增的
                if (this.count===1){
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            }else if (index == this.count-1){// 最后一项 //新增的
                current =this.tail
                this.tail = current.prev
                this.tail.next = undefined
            }else {
                current = this.getElementAt(index)
                const previous = current.prev;
                previous.next = current.next
                current.next.prev=previous
            }
            this.count--
            return  current.element

        }
        return undefined
    }


}

module.exports = DoublyLinkedList
