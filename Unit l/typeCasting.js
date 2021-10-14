var myInt = 24;
var myfloat = 3.1416;
var myString = "Danyael";
var mystringNumber = "24.5";
var myNull = null;

//TypeCasting: Explicit using Global Functin
//Explicid
console.log(typeof myfloat);
console.log(typeof String(myfloat)); //This function not manipulated the variable, only delivery the value that you want 
console.log(typeof myfloat);         //If you want the function to modify the variable, you must enter this function (myfloat=String(myfloat));

myString = Boolean(myString);
console.log(myString);

//Falsy Values
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(myNull));
console.log(Boolean(false));
console.log(Boolean(NaN)); /*Not is a Number (NaN)
                           Example of NaN
                           myString = Number(myString);
                           console.log(myString);*/
//True Values
console.log(Boolean("Danyael"));
console.log(Boolean(5));
console.log(Boolean({}));
console.log(Boolean( [] ));
console.log(Boolean({key:"5"}));

console.log(typeof myNull);
console.log(isNaN( Number("5x")));

//TypeCasting Explicit Methods

console.log(Number.parseFloat(myfloat));
console.log(Number.parseInt(myfloat));
console.log(Number.parseInt(mystringNumber));
console.log(Number.parseFloat(mystringNumber));

//TypeCastinig Coersion Implicit

var result = "Hello " + "World";
var resultNumbersStringAdd  = 2 + " Hello"; //The result is equal if using numbers
var resultNumbersStringRemainder = 2 - "22";
console.log(result);
console.log(resultNumbersStringAdd);
console.log(resultNumbersStringRemainder);