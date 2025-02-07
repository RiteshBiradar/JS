//reduce method

const arr = [1,2,3,4,5]

//Normal Function
const myTotal = arr.reduce(function(acc,curr){
    return acc+curr;
},0)
console.log(myTotal)


//Arrow Function
const newTotal = arr.reduce((arr,curr)=>arr+curr, 0)
console.log(newTotal)


//return the sum of all prices from the shoppingCart
const shopping = [
    {
        itemName : "js",
        price : 2999
    },
    {
        itemName : "dsa",
        price : 12999
    },
    {
        itemName : "backend",
        price : 5999
    },
]
const ans = shopping.reduce((arr,curr)=>{
        return arr+curr.price;
} ,0)
console.log(ans)