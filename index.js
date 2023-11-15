var inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const questions = [
    {
        type: 'input',
        name: 'txt',
        message: 'Type 3 characters to put in your SVG'
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'What color should the text be?'
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'What color should the text be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape should the logo have?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the shape be?'
    }


];

// initialize app, call generateMarkdown app and writeToFile function
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            var logo;
            if (answers.shape === 'circle') {
                logo = new Circle(answers.shapeColor, answers.txt, answers.txtColor);
            } else if (answers.shape === 'triangle') {
                logo = new Triangle(answers.shapeColor, answers.txt, answers.txtColor);
            } else {
                logo = new Square(answers.shapeColor, answers.txt, answers.txtColor);
            }

            var svg = generateSvg(logo);
            console.log(svg);
            return writeSVG('logo.svg', svg);
        })
        .catch(err => console.error(err))

}

// Function call to initialize app
init();

