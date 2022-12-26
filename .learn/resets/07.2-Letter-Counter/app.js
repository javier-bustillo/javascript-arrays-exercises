let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {

};


for (let i in par) {
    const letter = par[i].toLowerCase();
    if (counts['letter'] === undefined) {
        counts[letter] = counts[letter] + 1;
    }

}



console.log(counts);