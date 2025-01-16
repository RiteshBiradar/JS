const name = "Ritesh"

console.log(`Hello everyone this is ${name}`) //stop using concatenation use backticks instead

const name1 = new String('Ritesh') //with help of this object creation we can make use of different methods like:

console.log(name.indexOf('i'))
console.log(name.charAt(1))
console.log(name.length)
console.log(name.substring(0,4))
//console.log(name.slice(-1,-4)) doesn't work as startIndex>endIndex and we can't access in reverse order of the string using slice
console.log(name.slice(-4,-1))

const newName = "  ritash-com-tom   "
console.log(newName.trim())
console.log(newName.trim().replace('a','e'))
console.log(newName.trim().split('-'))
