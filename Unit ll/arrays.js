//Create an Array

var myArray = [1,2,3,4,5];
// or var myArray2, = new Array(1,2,3);
const ln = myArray.length;
console.log(ln);

//Show Array: Elements

console.log(myArray);

//Iterate Arrays

for (let i = 0; i < ln; i++) {
    console.log(myArray[i]); 
};
console.log("-----------------");
for (let index in myArray) {
    console.log(myArray[index]); 
};
console.log("*****************");
for (let i of myArray) {
    console.log(i); 
};

//Adding Elements
let data = [];
console.log(data);
const temp = 27;
data.push(temp);
data.push(12);
data.push(60);
console.log(data);
//Insert first element
data.unshift(12);
console.log(data);
//Insert multiple data
data.splice(2,0, 3,4);
console.log(data);

//Delete elements
data.pop(); //Remove the last element
data.shift(); //Remove the first element
data.splice(1,3); //Start at index 1 and remove the next 3 elements
console.log(data);
data.splice(1,3,500);//Start at index 1 and remove the next 3 elements and add the numer 500
console.log(data);

//Copy
var friends = ["Danyael", "Cesar", "Alexis"];
console.log(friends);
//I want to copy this arrays
var bestfriends = friends; 
/*bestfriends is not a copy, modify the friends variable. If we want that not to happen we must use the function
[var bestfriends = friends.slice();] or [var bestfriends = friends.slice(1);] If I want to copy from index 1*/
bestfriends.shift();
console.log(bestfriends);
console.log(friends); //bestfriends = friends because 

var edades = [20,22,23,24];
for (let i = 0; i < edades.length; i++) { //I want to subtract 2 units from all the elements of the array
    edades[i] = edades[i] - 2;
};
console.log(edades);
//Using Map
edades = edades.map( function(currentValue, index) {
    return currentValue - 2;
});
console.log(edades);
//Or
edades = edades.map(i => i - 2);
console.log(edades);
