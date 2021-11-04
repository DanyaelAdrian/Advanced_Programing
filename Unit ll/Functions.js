function addTwoNumbers(parameter1, parameter2){ //Funcion por expresion
    return parameter1 + parameter2;
}

console.log(addTwoNumbers(2,3));
//Funcion por sentencia

const addFullNumbers = function (){
    const numbers = [...arguments]
    return numbers;
}

console.log(addFullNumbers(1,2,3));

const addNumbers = function (){
    const numbers = [...arguments]
    const add = numbers.reduce( function (acc, currentValue, currentIndex, array){
        return acc = acc + currentValue;
    }, acc = 0 )
    return add;
}

console.log(addNumbers(1,2,3));

//Arrow function

const arrowFunction = (parameter3, parameter4) => {return parameter3*parameter4}
console.log(arrowFunction(2,5));

//Si solo se tiene un parametro quedaria de la siguiete manera
const arrowFunction2 = parameter5 => parameter5*2;
console.log(arrowFunction2(2));