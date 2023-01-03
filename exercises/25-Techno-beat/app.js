function lyricsGenerator(arr) {
    let lyrics = ' ';
    let j = 0;
    for (j; j < arr.length; j++) {
        if (arr[j] === 0) {
            lyrics += 'Boom ';
        }
        if (arr[j] === 1) {
            lyrics += 'Drop the base ';
        }
        if (arr[j] === 1 && arr[j - 1] === 1 && arr[j - 2] === 1) {
            lyrics += '!!!Break the base!!! ';
        }
    }

    return lyrics;
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))