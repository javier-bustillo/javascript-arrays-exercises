function lyricsGenerator(arr) {
    let lyrics = '';
    let i = 0;
    for (i; i < arr.length; i++) {
        if (arr[i] === 0) {
            lyrics += ' Boom ';
        }
        if ((arr[i] === 1 && arr[i] === (arr[i + 1])) && (arr[i] === arr[i + 2])) {
            lyrics += ' !!!Break the base!!!';
        }
        if (arr[i] === 1) {
            lyrics += ' Drop the base ';
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