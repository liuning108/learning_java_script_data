/**
 * 有一个非常重要的细节是，我们使用对象而不是数组来表示集合(items)。
 * 不过，也可以 用数组实现。此处用对象来实现，
 * 和我们在第 4 章与第 5 章中学习到的对象实现方式很相似。
 * 同 样地，JavaScript 的对象不允许一个键指向两个不同的属性，也保证了集合里的元素都是唯一的


  add(element):向集合添加一个新元素。
  delete(element):从集合移除一个元素。
  has(element):如果元素在集合中，返回 true，否则返回 false。  clear():移除集合中的所有元素。
  size():返回集合所包含元素的数量。它与数组的 length 属性类似。  values():返回一个包含集合中所有值(元素)的数组。add(element):向集合添加一个新元素。
  delete(element):从集合移除一个元素。
  has(element):如果元素在集合中，返回 true，否则返回 false。  clear():移除集合中的所有元素。
  size():返回集合所包含元素的数量。它与数组的 length 属性类似。  values():返回一个包含集合中所有值(元素)的数组。
 */
class Set {
    constructor() {
        this.items = {}
    }

    /**
     *  has(element)方法
     *      首先要实现的是 has(element)方法，因为它会被 add、delete 等其他方法调用。它用来 检验某个元素是否存在于集合中，下面看看它的实现。
     */
    has( element ){
        return element in this.items
    }

    /**
     *   add(element):向集合添加一个新元素。
     */
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true
        }
        return  false
    }

    /**
     * 在 delete 方法中，我们会验证给定的 element 是否存在于集合中。
     * 如果存在，就从集合 中移除 element(行{1})，返回 true，
     * 表示元素被移除;否则返回 false。
     */

    delete(element){
        if(this.has(element)){
            delete this.items[element]
            return true
        }
        return false
    }

}


module.exports =Set
