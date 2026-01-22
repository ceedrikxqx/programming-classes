for(let i=1; i<4;i++){
    for(let j=1 ;j<5;j++){
        console.log("Row",i,"-","Seat",j);
    }
}

let shoppingList=["1.Bread ",'item bought',"2.milk",'item bought',"3.Eggs",'item bought',"4.Rice",'item bought',"5.Oil",'item bought']

for (let i=0; i<=shoppingList.length;i++){
    console.log(shoppingList[i]);
}

 let students = [ { name: "Aisha", age: 13, class: "JSS 1", score: 78 }, { name:
            "John", age: 14, class: "JSS 2", score: 45 }, { name: "Mariam", age: 13, class:
            "JSS 1", score: 88 }, { name: "David", age: 15, class: "JSS 3", score: 60 }

]
for (let i=0; i<students.length;i++){
    if(students[i].score==78){
        console.log("Aisha passed with a score of",students[0].score);
    }else if(students[i].score==88){
        console.log("Mariam passed with a score of",students[2].score);
    }else if(students[i].score==60){
        console.log("David passed with a score of ",students[3].score);

    }
}
for (let i=0; i<students.length;i++){
    if(students[i].class=="JSS 1"){
        console.log("Aisha is in",students[0].class);
        console.log("Mariam is in ",students[2].class);

    }
}






//for (let i=4;i<=students.length;i++){
    //console.log("Aisha passed with a score of 78");
    //console.log("Mariam passed with a score of 88");
    //console.log("David passed with a score of 60");
//
//for (let i=4;i<=students.length;i++){
    //console.log("Aisha is in JSS1");
   // console.log("Mariam is in JSS1")
//



let name="john"; let hobby="reading"
 let sentence="my name is"+" " + name + " "+ "and i love"+" " + hobby +" "+ "everyday";
console.log(sentence);
console.log(`my name is ${name} and i love ${hobby} everyday`);


let theName= "David";
 let old=14
let age=15
console.log(`${name} is ${old} years old`);
 console.log(`${theName} is ${age} years old`);