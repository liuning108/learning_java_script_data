const Node = require('./Node')
const LinkedList = require('./linkedlist')

function defaultEquals(a,b) {
    return a===b
}

class CircularLinkedList extends  LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    /***
     *
     * 向循环链表中插入元素的逻辑和向普通链表中插入元素的逻辑是一样的。不同之处在于我们 需要将循环链表尾部节点的 next 引用指向头部节点。下面是 CircularLinkedList 类的 insert 方法。     */
    insert(element , index ){
        if(index>=0 && index<=this.count) {
            const node = new Node(element)
            let current = this.head
            if (index ==0 ){
                if (this.head == null) {
                    this.head = node
                    node.next = this.head
                }else {
                    node.next = current
                    current =this.getElementAt(this.size())
                    this.head = node
                    current.next = this.head
                }
            }else { // 这种场景没有变化
                const previous = this.getElementAt(index-1)
                node.next = previous.next
                previous.next = node
            }

            this.count++
            return  true

        }
        return false
    }


    /**
     * 要从循环链表中移除元素，我们只需要考虑第二种情况，也就是修改循环链表的 head 元素。
     * removeAt 方法的代码如下
     */
    removeAt(index) {
        if(index >=0 && index<this.count) {
            let current =this.head
            if (index ==0) {
                if(this.size()===1){
                    this.head = null
                }else{
                    const removed = this.head
                    current = this.getElementAt(this.size())
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                }


            }else{
                const previous = this.getElementAt(index-1)
                current = previous.next
                previous.next = current.next
            }
            this.count --
            return  current.element
        }
        return undefined
    }
}
