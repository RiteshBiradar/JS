const d = 84 //Global Scope
var c = 155

{
    const a= 10
    let b = 20
    var c = 30
    const d =50
    //Local or Block scope
    console.log(d) //will print 50
}
// console.log(a) //error throw karta a is not defined
// console.log(b) //error throw karta b is not defined 
console.log(c) //will print c of value 30
console.log(d) //will print 84
