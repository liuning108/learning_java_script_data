
/**
 * 要表示链表中的第一个以及其他元素，我们需要一个助手类，叫作 Node(行{1})。
 * Node 类表示我们想要添加到链表中的项。它包含一个 element 属性，
 * 该属性表示要加入链表元素的 值;以及一个 next 属性，该属性是指向链表中下一个元素的指针。
 * 它的代码如下所示。
 */
class  Node {
    constructor(element,next) {
        this.element   = element
        this.next = next
    }
}
module.exports = Node
