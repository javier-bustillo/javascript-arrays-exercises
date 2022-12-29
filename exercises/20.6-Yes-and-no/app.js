let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const myFunction = (val) => {
    if (val === 1) {
        val = 'wiki';
        return val;
    } else {
        val = 'woko';
        return val;
    }
};
const newArr = theBools.map(myFunction);
console.log(newArr);