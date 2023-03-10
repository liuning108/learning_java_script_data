/**
 * 散列算法的作用是尽可能快地在数据结构中找到一个值。在之前的章节中，你已经知道如果 要在数据结构中获得一个值(使用 get 方法)，需要迭代整个数据结构来找到它。如果使用散列 函数，就知道值的具体位置，因此能够快速检索到该值。散列函数的作用是给定一个键值，然后 返回值在表中的地址。
 * 散列表有一些在计算机科学中应用的例子。因为它是字典的一种实现，所以可以用作关联数 组。它也可以用来对数据库进行索引。当我们在关系型数据库(如 MySQL、Microsoft SQL Server、 Oracle，等等)中创建一个新的表时，一个不错的做法是同时创建一个索引来更快地查询到记录 的 key。在这种情况下，散列表可以用来保存键和对表中记录的引用。另一个很常见的应用是使 用散列表来表示对象。JavaScript 语言内部就是使用散列表来表示每个对象。此时，对象的每个 属性和方法(成员)被存储为 key 对象类型，每个 key 指向对应的对象成员。
 *
 * 解决 HashCode 冲突
 * 1. 分离链接 分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的
 * 最简单的方法，但是在 HashTable 实例之外还需要额外的存储空间。 例如，我们在之前的测试代码中使用分离链接并用图表示的话，输出结果将会是如下这样
 * (为了简化，图表中的值被省略了)。
 *
 */

const LinkedList = require('../06链表/linkedlist')
function defaultToString(item){
    if(item==null){
        return "NULL"
    }else if (item === undefined) {
        return "UNDERFINED"
    }else  if (typeof  item ==='string' || item instanceof  String){
        return   `${item}`
    }
    return  item.toString()

}


class  ValuePair{
    constructor(key,value) {
        this.key = key
        this.value = value
    }
    toString(){
        return `[${this.key}:${this.value}]`
    }
}

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = defaultToString
        this.table ={}
    }

    loseloseHashCode(key){
        if (typeof key === 'number'){
            return key%37
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for(let i =0;i<tableKey.length;i++){
            hash+=tableKey.charCodeAt(i)
        }
        return  hash%37

    }

    hashCode(key){
        return this.loseloseHashCode(key)
    }


    put(key,value){
        if (key!=null && value !=null){

            const pos = this.hashCode(key)
            if(this.table[pos]==null){
                this.table[pos] = new LinkedList()
            }

            this.table[pos].push(new ValuePair(key,value))
        }
        return false
    }
    get(key){
        const pos = this.hashCode(key)
        const linkedList = this.table[pos]
        if (linkedList!=null && !linkedList.isEmpty()){
            let current = linkedList.getHead()
            while (current!=null){
                if (current.element.key===key){
                    return  current.element.valueOf
                }
                current = current.next
            }

        }
        return  undefined
    }


    remove(key){
        const pos = this.hashCode(key)
        const linkedlist = this.table[pos]
        if (linkedlist!=null && !linkedlist.isEmpty()){
            let current  = linkedlist.getHead()
            while (current!=null){
                if (current.element.key == key){
                    linkedlist.remove(current.element);
                    if (linkedlist.isEmpty()){
                        delete  this.table[pos]
                    }
                    return  true
                }
                current = current.next
            }
        }
        return false
    }



}

module.exports= HashTable
