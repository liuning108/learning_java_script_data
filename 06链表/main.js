

const LinkedList = require('./DoublyLinkedList')

const  list = new LinkedList()
list.insert(15,0)
list.insert(10,1)
list.insert(12,2)
list.remove(10)

console.log(list.toString())

