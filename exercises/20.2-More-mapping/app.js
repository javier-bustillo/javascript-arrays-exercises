let myNumbers = [23, 234, 345, 4356234, 243, 43, 56, 2];

const myFunction = (num) => {
    return num * 3;
}

const newArray = myNumbers.map(myFunction);

console.log(newArray);