let allColors = [{
        label: 'Red',
        sexy: true
    },
    {
        label: 'Pink',
        sexy: false
    },
    {
        label: 'Orange',
        sexy: true
    },
    {
        label: 'Brown',
        sexy: false
    },
    {
        label: 'Pink',
        sexy: true
    },
    {
        label: 'Violet',
        sexy: true
    },
    {
        label: 'Purple',
        sexy: false
    },
];
/* for (let i in allColors) {
    if (allColors[i].sexy) {
        console.log(allColors[i].label);
    }
} */

function generateLI(color) {
    htmlLIString = '<li>' +
        filterColors(color) + '</li>';
    return htmlLIString;
}

function filterColors(color) {
    let colors = '';
    for (let i in allColors) {
        if (allColors[i].sexy) {
            console.log(allColors[i].label);
            return colors += allColors[i].label;
        }
    }


}


function generateHTMLFromArray(array) {

    let filteredOptions = array.filter(filterColors);
    let LIs = filteredOptions.map(generateLI);

    let htmlString = '<ul>';
    LIs.forEach(function(elm) {
        htmlString += elm;
    })
    htmlString += '</ul>';
    return htmlString;
}

console.log(generateHTMLFromArray(allColors));