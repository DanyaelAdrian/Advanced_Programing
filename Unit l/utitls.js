
var module = "Este es mi modulo!";

export default class myUtils{
    constructor(){};
}

export function validateWord(variable, palabra){
    if(variable.includes(palabra)){
        return true;
    };
    return false;
}
