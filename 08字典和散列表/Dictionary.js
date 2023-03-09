

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

/**
 *
 * 你已经知道，集合表示一组互不相同的元素(不重复的元素)。
 * 在字典中，存储的是[键，值] 对，其中键名是用来查询特定元素的。
 * 字典和集合很相似，集合以[值，值]的形式存储元素，字 典则是以[键，值]的形式来存储元素。
 * 字典也称作映射、符号表或关联数组。
 *
 *
 *  set(key,value):向字典中添加新元素。如果 key 已经存在，那么已存在的 value 会 被新的值覆盖。
 *  remove(key):通过使用键值作为参数来从字典中移除键值对应的数据值。
 *  hasKey(key):如果某个键值存在于该字典中，返回 true，否则返回 false。
 *  get(key):通过以键值作为参数查找特定的数值并返回。
 *  clear():删除该字典中的所有值。
 *  size():返回字典所包含值的数量。与数组的 length 属性类似。
 *  isEmpty():在 size 等于零的时候返回 true，否则返回 false。
 *  keys():将字典所包含的所有键名以数组形式返回。
 *  values():将字典所包含的所有数值以数组形式返回。
 *  keyValues():将字典中所有[键，值]对返回。
 *  forEach(callbackFn):迭代字典中所有的键值对。callbackFn 有两个参数:key 和
 * value。该方法可以在回调函数返回 false 时被中止(和 Array 类中的 every 方法相似)。
 */

class  Dictionary {

    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table={}
    }

    /**
     * 1. 检测一个键是否存在于字典中
     * 我们首先来实现 hasKey(key)方法。之所以要先实现这个方法，是因为它会被 set 和
     * remove 等其他方法调用。我们可以通过如下代码来实现。
     */
    hasKey(key){
        return this.table[this.toStrFn(key)] !=null
    }

    /**
     * 在字典和 ValuePair 类中设置键和值
     *
     * 该方法接收 key 和 value 作为参数。
     * 如果 key 和 value 不是 undefined 或 null，
     * 那么 我们获取表示 key 的字符串(行{1})，创建一个新的键值对并将其赋值
     * 给 table 对象上的 key 属性(tableKey)(行{2})。
     * 如果 key 和 value 是合法的，我们返回 true，表示字典可以将 key 和 value 保存下来，否则返回 false。
     */

    set(key,value){
        if (key !=null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey]  = new ValuePair(key,value)
            return  false
        }
        return false
    }

    /**
     * 3. 从字典中移除一个值
     * 接下来，我们实现remove方法。它和Set类中的delete方法很相似，唯一的不同在于我 们将先搜索 key(而不是 value)。
     */
    remove(key){
        if (this.hasKey(key)){
            delete  this.table[this.toStrFn(key)];
            return true
        }
        return false
    }

    /**
     * 4. 从字典中检索一个值
     * 如果我们想在字典中查找一个特定的 key，并检索它的 value，可以使用下面的方法。
     */
    get(key){
        const  valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined: valuePair.value
    }


    /**
     * 5. keys、values 和 valuePairs 方法
     * 我们已经给 Dictionary 类创建了最重要的方法，现在来创建一些很有用的辅助方法。
     */
    keyValues(){
        const  valuePairs =[]
        for (const  key in this.table) {
            if (this.hasKey(key)){
                valuePairs.push(this.table[key])
            }
        }
        return valuePairs
    }

    keys(){
        return this.keyValues().map(value => value.key)
    }

    values(){
        return this.keyValues().map(value => value.value)
    }

    /**
     * 7. clear、size、isEmpty 和 toString 方法
     */
    size(){
        return Object.keys(this.table).length
    }

    isEmpty(){
        return this.size() === 0
    }

    clear(){
        this.table = {}
    }


    /**
     *
     * @returns {string}
     */

    forEach(callbackFn){
        const valuePair = this.keyValues()
        for (let i =0 ;i<valuePair.length;i++){
            const result =callbackFn(valuePair[i].key,valuePair[i].value)
            if (result==false){
                break
            }
        }
    }


    toString(){
        if (this.isEmpty()){
            return ""
        }
        const valuePairs = this.keyValues()
        let objString =`${valuePairs[0].toString()}`

        for (let i =1 ;i<valuePairs.length;i++){
            objString = `${objString},${valuePairs[i].toString()}`
        }
        return  objString
    }



}
module.exports = Dictionary
