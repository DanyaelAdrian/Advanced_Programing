//Global Scope
var myVar = 100; 
let myLet = 15;
const myConst = 3.1416;    //tiene que estar declarado el valor de la variable const antes de usarlo

console.log(`myVar: ${myVar}, myLet: ${myLet}, myConst: ${myConst}, varHoisted: ${hoistedVariable}`);
//Hoisting

var hoistedVariable = 25; //Var Hoisted

//Local Scope

if (typeof myVar !== "undefined") { //Execution Context
    console.log(myVar);
    var myVar = 50;
    console.log(myVar);
};