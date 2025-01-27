const a = new Object();

//Combining 2 objects
const obj1 = {1:1,2:2};
const obj2 = {3:3,4:4};

const obj3 = Object.assign({},obj1,obj2);
const obj5 = Object.assign(obj1,obj2); //obj1 ki value mai store hojata sara 
const obj4 = {...obj1,...obj2} // Best approach to use
console.log(obj4)
console.log(obj3)
console.log(obj1)