let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];
const regexpWordStartingWithR = /\b[rR]\w+/g;

const resultingNames = allNames.filter((name) => {
    let nameStartingWithR = name.match(regexpWordStartingWithR);

    return nameStartingWithR;
});

console.log(resultingNames);