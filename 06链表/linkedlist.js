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

/**
 * 要表示链表中的第一个以及其他元素，我们需要一个助手类，叫作 Node(行{1})。
 * Node 类表示我们想要添加到链表中的项。它包含一个 element 属性，
 * 该属性表示要加入链表元素的 值;以及一个 next 属性，该属性是指向链表中下一个元素的指针。
 * 它的代码如下所示。
 */
class  Node {
    constructor(element) {
        this.element   = element
        this.next = null
    }
}

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

}

module.exports = Linkedlist
