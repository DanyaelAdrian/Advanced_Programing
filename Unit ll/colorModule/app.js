//I want to create a .txt file

const fs = require("fs");
const chalk = require("chalk");

const initialMessage = chalk.blue("App running...");
console.log( initialMessage );


//Create a file in the local DataBase
fs.writeFileSync("./dataBase/dataInformation.txt", "Server Information");
console.log( chalk.green("dataInformation was create successfully!"));