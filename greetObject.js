const greet = require('./greet.js');
const goodbye = require('./goodbye.js');

const nameObj = {
    name1: "johnny",
    name2: "andrew",
    name3: "chris",
    name4: "luis",
    name5: "morales"
}

for (let name in nameObj) {
    // console.log(`Hello, ${nameObj[name]}`);
    // greet(nameObj[name]);
    arr.forEach(obj) => {
        greet(obj[name]);
        goodbye(obj[name]);
    }
}