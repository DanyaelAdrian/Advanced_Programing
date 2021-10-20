const device = {
    sensorModel: "HC04",
    count: 0,
    date: new Date(),

};
console.log(device.date.getFullYear(), typeof device);
const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJSON);
//Crer un JSON desde code//

const myJson = '{"name": "Danyael", "age": 21, "friends": ["Alexis", "Marco"], "isManager": false}';
console.log(myJson, typeof myJson);

//Manipular JSON format//
const myObj = JSON.parse(myJson); //Convertimos un JSON a un objeto de JS
console.log(myObj.name);