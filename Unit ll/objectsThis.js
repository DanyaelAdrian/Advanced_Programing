const myObject = {
    name: "Danyael",
    age: 21,
    greeting: function(message){
        console.log(`This is equal to: ${JSON.stringify(this)} `);   
        console.log(`${message} I'm ${this.name} and I'm ${this.age}`);
    },
};
myObject.greeting("Hello World");

console.log("-----------------------------------");

const student = {
    name: undefined,
    age: undefined,
    greeting: function(message){
        console.log(`This is equal to: ${JSON.stringify(this)} `);
        console.log(`${message} I'm ${this.name} and I'm ${this.age}`);
    },
}
const Danyael = Object.create(student);
Danyael.name = "Danyael Adrian";
Danyael.age = 21;
Danyael.greeting("Hello World");

const Cesar = Object.create(student);
Cesar.name = "Cesar Sanchez";
Cesar.age = 21;
Cesar.greeting("Hello World");
Cesar.programming = function(problem){
    //Logic and computing.
    console.log("Programing solution for", problem);
};
Cesar.programming("Create an amazing Web app");
