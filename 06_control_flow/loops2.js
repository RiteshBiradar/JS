//Applying loops for objects
//For in loop

const myObj = {
    name:"ritesh",
    age:"18"
}

for(const key in myObj){
    console.log(key," :- ",myObj[key]); //key returns key value, objectname[key] returns value
}


//Applying for in loop on array

const arr = [1,2,3,4,5];
for(const key in arr){
    console.log(key," :- ",arr[key]); //key returns index values 0,1,2...., arrayName[key] returns value
}
