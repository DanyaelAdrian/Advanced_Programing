//I want to create a .txt file

const fs = require("fs");
const chalk = require("chalk");

const initialMessage = chalk.blue("App running...");
console.log( initialMessage );

//An object:
const device = {
    sensorModel: "HC04",
    count: 0,
    date: new Date(),

};

//Create a file in the local DataBase
fs.writeFileSync("./dataBase/log.json", '');
console.log( chalk.green("dataInformation was create successfully!"));
try{
    fs.appendFileSync("./dataBase/log.json", JSON.stringify(device));
    console.log(chalk.green("JSON done!"));
}catch(error){
    console.log(chalk.red(chalk.red(`Error: ${error}`)));
}
console.log(chalk.yellow("Algorithms running...."));