//for of loop

const arr = [1,2,3,4,5];

for(const num of arr){
   // console.log(num) // 1,2,3,4,5
}

const greetings = "Hello World"

for(const greet of greetings){
   // console.log(greet)         //Output : H e l l o  w o r l d , every character gets printed
}


//How to iterate on maps:
const map = new Map();

map.set(1,"ritesh")
map.set(2,"random")
map.set(3,"pritesh")

for(const key of map){
    console.log(key) //key here prints both [1,'ritesh'] then 2nd ,3rd, ...n
}

//to access each key and value
for(const [key,value] of map){
    console.log(key," :- ",value) //1  :-  ritesh
}
// Note:- that we can't apply same logic of iteration on objects