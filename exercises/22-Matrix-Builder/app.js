function matrixBuilder(val) {
    let i = 0;
    let j = 0;
    let rndNum = [];
    let arr = [];

    for (j; j < val; j++) {
        rndNum.push((Math.floor(Math.random() * 2)));
        arr.push(rndNum);
    }

    return arr;
}


// do not change anything from this line down
console.log(matrixBuilder(2));