let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

const mergeTwoList = (arr) => {
    const odd = [];
    const even = [];

    for (x of arr) {
        if (x % 2 !== 0) {
            odd.push(x);
        } else {
            even.push(x);
        }
    }
    const concatArr = odd.concat(even);
    return concatArr;
}
console.log(mergeTwoList(list_of_numbers));