let chunk_one = ['Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell'];
let chunk_two = ['Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for (x of firstArray) {
        newArray.push(x);

    }
    for (y of secondArray) {
        newArray.push(y);
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));