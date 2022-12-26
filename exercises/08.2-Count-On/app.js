let myArray = [42, true, "towel", [2, 1], 'hello', 34.4, {
    "name": "juan"
}];
let hello = [];

for (x of myArray) {
    if (typeof x === 'object') {
        hello.push(x);
    }
}

console.log(hello)