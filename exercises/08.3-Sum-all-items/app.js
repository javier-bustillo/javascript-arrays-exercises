function sumTheElements(theArray) {
    let total = 0;
    for (x of theArray) {
        total += x;
    }
    return total;
}
console.log(sumTheElements([1, 2]));