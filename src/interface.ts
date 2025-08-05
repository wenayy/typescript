interface User{
    name:string,
    age:number,
    mature:boolean
}

let vinay:User= { // unlike rust we did like vinay=User{} here not equal to just
    name:"vinayjoshi",
    age:18,
    mature:true
}

console.log(vinay.mature);

function greet(user:User):string{
    console.log(user);
    return user.name;
}
console.log(greet(vinay));

type UserType={ // similar looking
    name:string,
    gender:string

}
// types and interface similar looking

type Stringnumber= string| number;  // this is a type 
function music(rock:Stringnumber):Stringnumber{
    return rock;

}
type employee={
    name:string,
    jobid:number
    department:string
}
type manager={
    power:number,
    ego:number

}

type mixed =User & manager;  // type can do intersection and union

let mm :mixed={
    name:"vinay",
    power:33,
    ego:1999,
    age:33,
    mature:true

}

type teamlead = manager & employee  // type let me join union and intersection 
 /// type let u join the interface as well not the interface let u join both if they were interface as well

 interface People{
    name:string,
    age?:number,  // optional
    greet :()=>void; 
greet2():string
    // greet2():string. both are the same thing taking function as input returnning stirng
     
 }

 let joshi :People={
    name:"vinay",
     
    greet: function lwde():void{
        console.log("lodu");
    },
    greet2: function lode():string{
        return "lodu"
    }
   

 }
console.log(joshi);

