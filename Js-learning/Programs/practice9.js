// How to copy reference variable in JS

// using spread operator (...)

var a = [1,2,43,5645,67,8];
var b = [...a];

b.pop();
console.log(a);
console.log(b);