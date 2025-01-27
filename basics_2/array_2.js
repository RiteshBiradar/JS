const arr1 = [1,2,3]
const arr2 = [4,5,6]
// const ans = arr1.push(arr2)
// console.log(arr1) //returns [ 1, 2, 3, [ 4, 5, 6 ] ]
// console.log(ans) // returns 4 //the length of the array return karta (push() returns length meaning)



//concat
// const ans2 = arr1.concat(arr2)
// console.log(arr1) //returns [ 1, 2, 3 ]
// console.log(ans2) //returns [ 1, 2, 3, 4, 5, 6 ]


//spread (...) iska matlab raheta kholdo pura
const  ans3 = [...arr1,...arr2]
console.log(ans3)


//flat 
const hero1 = [1,2,3,[5,6,4],[7,8,[9,10]]]
const ans4 = hero1.flat(Infinity) // infinity is like degree kitna haad tak karna, so infinity is a like trick jisa we don't need to know the degree bus infinity daldo kaam hojata
console.log(ans4)


//isArray()
console.log(Array.isArray("Hitesh")) //false


//from to form a array
console.log(Array.from("ritesh")) //returns [ 'r', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"ritesh"})) //returns [] we need to justify which need to be converted to array key or value

//of to form a array
const a1 = 200
const b1 = 100
const c1 = 300
console.log(Array.of(a1,b1,c1)) //[ 200, 100, 300 ]