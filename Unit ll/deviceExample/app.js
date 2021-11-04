const chalk = require("chalk");


class Student {
    constructor(){
    };
    greeting(){
        console.log('Hello Friends!');
    }
};

//Insyanciar un objeto

const danyael = new Student();
danyael.greeting(); //De esta manera ejecuto los atributos que tiene danyael

class Device {
    constructor(name, model, noLeds, location){ 
        this.name = name; //"This" representa todas las funciones que hay en dentro de un objeto o clase
        this.model = model;
        this.noLeds = noLeds;
        this.location = location;
    };
    turnOnLed(){
        console.log(chalk.blue('Led turned On...'));
    }
};
class DeviceWithCamera extends Device{ //De esta manera evito tener que poner todos los "This"
    constructor(name, model, noLeds, location, cameraModel){ 
        super(name, model, noLeds, location);
        this.cameraModel = cameraModel; //De esta manera puedo agregar un nuevo atributo
    };
    turnOnLed(){
        console.log(chalk.blue('Led turned On...'));
    };
    takeAPicture(){
        console.log(chalk.green('Taking a picture...'));
    }
    get getInfo(){ //De esta forma puedo mostrar la informacion que existe dentro de los atributos
        return `name: ${this.name}. model: ${this.model}, noLeds: ${this.noLeds}`;
    }
};


const firstDevice = new Device("MyFirstDevice", "RaspberryPi4", 2, 1000);
firstDevice.turnOnLed();

const secondDevice = new DeviceWithCamera("SecondDevice", "RaspberryPi4", 4, 1000);
secondDevice.turnOnLed();
secondDevice.takeAPicture();
console.log(secondDevice.getInfo);
