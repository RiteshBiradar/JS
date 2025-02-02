const arr = [1,2,4,"hello",true]


const arr1 = new Array(1,2,3,5);
console.log(arr1)
arr1[25]=44;
console.log(arr1) // returns [ 1, 2, 3, 5, <21 empty items>, 44 ]
console.log(arr1.pop()) // removes 44 and prints it 
console.log(arr1.pop()) // returns undefined as he have 21 empty items, removes empty item and prints a undefined


arr2= [1,2,3,4]
arr2[5]=6
console.log(arr2) //returns [ 1, 2, 3, 4, <1 empty item>, 6 ]
console.log(arr2.pop()) //returns 6
console.log(arr2.pop()) //returns undefined
console.log(arr2.pop()) //returns 4


arr2= [1,2,3,4,5]
arr2[4]=6
console.log(arr2)


//unshift and shift methods 
const arr3 = [1,2,3,4]
arr3.unshift(9) // adds that element at first and shifts all to the right side  [ 9, 1, 2, 3, 4 ]
console.log(arr3)
arr3.shift() //removes 1st element
arr3.shift()
console.log(arr3) //returns [ 2, 3, 4 ]


//join method
const arr4 = arr3.join() //arr4 ek string banjati abhi which consists of all the element of arr3 
console.log(arr4) //returns 2,3,4 typeOf arr4 is " String"
console.log(arr3)


//slice and splice
const arr5 = [1,2,3,4,5]

console.log("Original ", arr5)

//slice:
const mynA1 = arr5.slice(1,3)
console.log(mynA1)
console.log("Array After Slice ",arr5)

//splice:
const mynA2 = arr5.splice(1,3)
console.log(mynA2)
console.log("Array after splice ",arr5)