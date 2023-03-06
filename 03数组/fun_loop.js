function isEven(x){
    console.log(x)
    return x%2===0;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


/**
 * 1. 用 every 方法迭代
 * 我们要尝试的第一个方法是 every。every 方法会迭代数组中的每个元素，直到返回 false。
 */
let result =numbers.every(isEven)
console.log(result)


/**
 * 2. 用 some 方法迭代
 * 下一步，我们来看 some 方法。它和 every 的行为相反，会迭代数组的每个元素，直到函 数返回 true。
 */

result =numbers.some(isEven)
console.log(result)


/**
 * 3. 用 forEach 方法迭代
 * 如果要迭代整个数组，可以用 forEach 方法。它和使用 for 循环的结果相同。
 */

numbers.forEach(x => console.log(x % 2 === 0));

/**
 * 4. 使用 map 和 filter 方法
 */
const myMap = numbers.map(isEven);
console.log(myMap)

/**
 * 还有一个 filter 方法，它返回的新数组由使函数返回 true 的元素组成。
 */
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers)



let sum =numbers.reduce((previous, current) => previous + current);
console.log(sum)

//排序元素
function compare(a, b) {
    if (a > b) {
        return -1; }
    if (a < b) {
        return 1;
    } // a必须等于b
    return 0;
}
numbers.sort(compare);
console.log(numbers)


//任何对象类型的数组排序
const friends = [
    { name: 'Bohn', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },
];
function comparePerson(a, b) {
    return a.name.localeCompare(b.name)
}

console.log(friends.sort(comparePerson));


//find

numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function multipleOf13(element, index, array) {
    return (element % 13 == 0);
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));


//使用 includes 方法
console.log(numbers.includes(15));
console.log(numbers.includes(20));

//Join
const numbersString = numbers.join('-');
console.log(numbersString);
