let x:number=  10;  // inferencing 

let y:String="vinay";
console.log(y);


function Greet (firstName:string,):void{
    console.log("hello sir ",firstName);

}
Greet("vinay");

function Sum(a:number, b:number):number{
      console.log(a+b);
    return a+b;
  
}

Sum(10,5);


function legal(age:number):boolean{
    if(age<18) return false;
    else return true;
}
 let ans :boolean =legal(22);
 console.log(ans);

 function insider(fn:()=>void): void{ // type of input 
   setTimeout(fn,1000);   // run a function after 1 second 

 }

 insider (function delayed(){
    console.log("mein toh chutiya hoon");
 })

