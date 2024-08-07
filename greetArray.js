const namesArr = [
    "Johnny", "Andrew", "Chris", "Luis", "Morales"
];

const namesArr2 = [
    "gyatty", "goku", "freddyfazbear"
];

// for (let i = 0; i < anyArr.length - 1; i++) {
//     console.log(`Hello, ${namesArr[i]}`);
// }

//wrap this forEach in a function



function greetNames(arr) {
    arr.forEach((name) => {
        console.log(`Hello, ${name}`);
    });
}

// greetNames(namesArr);
// greetNames(namesArr2);
global.namesArr = namesArr;
global.namesArr2 = namesArr2;
global.greetNames = greetNames;