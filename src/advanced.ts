// readonly

type User={
  readonly  name:string,
    age:number  // inner value needs to be constant 
}

const user :User={
    name:"vinay joshi",
    age:23
}
 //user.name="joshi";;  // it will give error to do that 


 // if the whole object is readonly 

 const user2:Readonly<User>  ={ /// 
    name:"joshi",
    age:33,
 }

 type part=Partial<User>; //

 //
 type Rec=Record<string, User> // or {name:string}
 let kk:Rec={
    "vinay": {name:"vinay",age:33}
 }

 type Usage={
    key:[age:number]
 }
// parital , record , pick, map  new Map<string, User>()

 
