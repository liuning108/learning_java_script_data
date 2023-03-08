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

    /**
     * 如果想移除集合中的所有值，可以用 clear 方法。
     */
    clear(){
        this.items = {}
    }

    size(){
        return Object.keys(this.items).length
    }

    /**
     * 要实现 values 方法，我们同样可以使用 Object 类内置的 values 方法。
     * @returns {unknown[]}
     */
    values(){
        return Object.values(this.items)
    }

    /**
     *  并集:对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。
     *  交集:对于给定的两个集合，返回一个包含两个集合中共有元素的新集合。
     *  差集:对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集
     * 合的元素的新集合。
     *  子集:验证一个给定集合是否是另一集合的子集。
     */

    /**
     * 并集:对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。
     */
    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value=>unionSet.add(value))
        return unionSet
    }

    /**
    交集:对于给定的两个集合，返回一个包含两个集合中共有元素的新集合。
     */
    intersection(otherSet){
        const intersectionSet = new Set()
        const values = this.values()
        for(let i =0;i<values.length;i++){
            if (otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    /**
     *  差集:对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集
     * 合的元素的新集合。
     */
    difference(otherSet){
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value)){
                differenceSet.add(value)
            }
        })
        return differenceSet
    }


    /**
     * 子集
     * 要介绍的最后一个集合运算是子集。其数学概念的一个例子是集合 A 是集合 B 的子集(或集
     *  合 B 包含集合 A)，表示如下。
     */
    isSubsetOf(otherSet){
        if(this.size()> otherSet.size()){
            return false
        }
        let isSubset = true
        this.values().every(value => {
            if(!otherSet.has(value)){
                isSubset =false
                return false
            }
            return  true
        })
        return  isSubset
    }


}


module.exports =Set
