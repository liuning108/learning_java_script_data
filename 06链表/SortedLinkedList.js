const Node = require('./Node')
const LinkedList = require('./linkedlist')

function defaultEquals(a,b) {
    return a===b
}
/**
 有序链表是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到
 正确的位置来保证链表的有序性。
 **/

const Compare = {
    LESS_THAN:-1,
    BIGGER_THEN:1
}


function defaultCompare(a,b) {
    if(a==b){
        return 0
    }
    return  a<b?Compare.LESS_THAN:Compare.BIGGER_THEN
}


/**
 * SortedLinkedList 类会从 LinkedList 类中继承所有的属性和方法，
 * 但是由于这个类有 特别的行为，我们需要一个用来比较元素的函数。
 * 因此，还需要声明 compareFn(行{3})，
 * 用 来比较元素。该函数会默认使用 defaultCompare。
 * 如果元素有相同的引用，它就返回 0(行{1})。
 * 如果第一个元素小于第二个元素，它就返回-1，反之则返回 1。
 * 为了保证代码优雅，我们可以声 明一个 Compare 常量来表示每个值。
 * 如果用于比较的元素更复杂一些，我们可以创建自定义的 比较函数并将它传入 SortedLinkedList 类的构造函数中。
 */

class SortedLinkedList extends  LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn
    }

    insert(element, index=0) {
        if (this.isEmpty()){
            return super.insert(element,0)
        }
        const pos = this.getIndexNextSortedElement(element)
        return  super.insert(element,pos)
    }

    getIndexNextSortedElement(element){
        let current = this.head
        let i =0
        for (;i<this.size() && current; i++){
         const comp = this.compareFn(element,current.element)
         if (comp === Compare.LESS_THAN){
             return  i
         }
         current = current.next
        }
        return i
    }


}
module.exports = SortedLinkedList

