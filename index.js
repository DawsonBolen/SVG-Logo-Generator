const inquirer = require("inquirer");
const {Triangle,Circle,Square} = require("./utils/generateSVG");

const fs = require('fs/promises');
const path = require('path');

// function writeSVGFile(filename = "logo", content = {}) {
//     console.log('writing to file', content, filename);
//     fs.writeFile(`${__dirname}/dist/${filename}.svg`, content).then(() => {
//         console.log('done');
//     })
// }

const questions = [
    {
        type: "list",
        name: "shape",
        message: "Shape",
        choices: ['Circle', 'Square', 'Triangle'],
        validate: (value) => { if (value) { return true } else { return 'You must chose a shape' } }
    },
    {
        type: "input",
        name: "name",
        message: "Name",
        validate: (value) => { if (value.length <= 3) { return true } else { return 'must be no more than 3 characters long' } }
    },
    {
        type: "input",
        name: "textcolor",
        message: "Text color",
        validate: (value) => { if (value) { return true } else { return 'You must choose a text color' } }
    },
    {
        type: "input",
        name: "shapecolor",
        message: "Shape color",
        validate: (value) => { if (value) { return true } else { return 'You must enter a shape color' } }
    }
   
];



function writeToFile(fileName, response) {
    return fs.writeFileSync(path.join(__dirname, fileName), response);
   
 }
 

async function init() {
    const response = await inquirer.prompt(questions);
        //const svgText = generateSVG(answers);
        
        writeToFile('logo.svg', response);
}

init();