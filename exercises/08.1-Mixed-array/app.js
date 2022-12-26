let mix = [42, true, "towel", [2, 1], 'hello', 34.4, {
    "name": "juan"
}];
const myArr = [];

for (x of mix) {
    myArr.push(typeof x);
}
console.log(myArr)