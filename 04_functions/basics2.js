//Rest operator -->same as spread operator 

function restOperator(...nums){
    console.log(nums);
}
restOperator(200,11,220,2412,453,5464)


function restOperatorV(val1, val2 ,...nums){
    console.log(val1,val2)
    console.log(nums);
}
restOperatorV(200,11,220,2412,453,5464)


//Passing object in function

//first way
const user = {
    name:"ritesh",
    age:19
}
function objectCall(someobject){
    console.log(`Username ${someobject.name} of age ${someobject.AGE}`) // returns undefined for age
}
objectCall(user)


//second way
objectCall({
    name:"rishi",
    age:20
})