const Dictionary = require('./Dictionary')

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');


console.log(dictionary.hasKey('Gandalf'))

console.log(dictionary.size())

console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get("Tyrion"))



console.log(dictionary.toString())


dictionary.remove('John');
console.log(dictionary.toString())


dictionary.forEach((k,v)=>{
    console.log('forEach',`key:${k},value:${v}`)
})


const HashTable = require('./HashTable')
const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');
