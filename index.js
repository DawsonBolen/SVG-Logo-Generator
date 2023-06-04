const inquirer = require("inquirer");
//const {Triangle,Circle,Square} = require("./utils/generateSVG");
const chooseShape = require("./utils/chooseShape.js")
const fs = require('fs/promises');
const path = require('path');



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
        validate(value) {
            console.log(value);
            return new Promise((resolve, reject) => {

                if (value.length >= 3) {

                    //console.log(value);
                    resolve(true);
                } else {
                    //console.log(value);
                    reject(new Error('must be no more than 3 characters long'));
                }
            })


        }
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



function writeToFile(fileName, content) {
    fs.writeFile(path.join(__dirname, fileName), content)
        .then((result) => {
            console.log("write file", result);
        })
}



function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            //console.log("response", response);
            const svg = chooseShape(response);
            writeToFile("logo.svg", svg);
        })
        .catch(err => {
            console.log(err)
        });
}


init();