let myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];
let aux = 0;

for (x of myArray) {
    if (x > aux) {
        aux = x;
    }
}
console.log(aux);