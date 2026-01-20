let x=3

for(let x=3; x<11; x+=2){
    for(let j=1; j<=10; j++){
        console.log(x,j)
    }
}



//loop through an array
let fruits=["mango","cashew","banana","orange"]
 for(let i=3; i<fruits.length; i++){
     console.log(fruits[i])
 }



 //loop through object
let me={
     name:"samad",
    age:23,
    gender:"male",
}
 for(let key in me){
     console.log(key, me[key])
 }


 //concatenation

let firstName="Peace";
let lastName="yetunde";

let fullName=firstName+ " "+ lastName;
console.log(fullName)

let name="ceedrik";
let  age=3;

console.log('my name is ${name} and i am ${age} years old');

let old=23
let isAllow=true;

if(old>=23){
    if(isAllow){
            console.log("can enter")
    }
}

let year=23
console.log("i am"+year+"years old");

let a=[1,2];
let b=[3,4];
let result=a.concat(b);
console.log(result);


