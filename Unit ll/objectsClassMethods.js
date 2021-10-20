const student = {
    name: "Pedro",
    age: 19,
    greeting: function(message){
        console.log(`This is equal to: ${JSON.stringify(this)} `);
        console.log(`${message} I'm ${this.name} and I'm ${this.age}`);
    },
};

const cpyStudent = Object.assign(student); /*La foma correcta para no modificar "student" es usando 
                                            Object.create(student); o {...student};*/
cpyStudent.name = "Fernando";
console.log(student);
console.log(cpyStudent);

