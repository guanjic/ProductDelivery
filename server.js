const express = require("express");

console.log("server file is running");

// function add(a,b){
//     return a+b;
// }

var add = (a,b) => { return a+b;}

var result = add(11,5);
console.log(result);