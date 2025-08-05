"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 10; // inferencing 
let y = "vinay";
console.log(y);
function Greet(firstName) {
    console.log("hello sir ", firstName);
}
Greet("vinay");
function Sum(a, b) {
    console.log(a + b);
    return a + b;
}
Sum(10, 5);
function legal(age) {
    if (age < 18)
        return false;
    else
        return true;
}
let ans = legal(22);
console.log(ans);
function insider(fn) {
    setTimeout(fn, 1000); // run a function after 1 second 
}
insider(function delayed() {
    console.log("mein toh chutiya hoon");
});
//# sourceMappingURL=index.js.map