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

// write generated svg to logo file
function writeSVG(fileName, data) {
    writeFile(fileName, data)
    .then(()=>console.log('Generated logo.svg'))
    .catch(err=>coneole.error('Failed to generate logo.svg'));
}

function generateSvg(svg) {

    if (svg instanceof Circle) {
        return `
    <svg xmlns="${svg.xmlns}" version = "${svg.ver}" width = "${svg.width}" height = "${svg.height}">
    <circle cx="${svg.cx}" cy="${svg.cy}" r="${svg.radius}" fill="${svg.shapeFill}" anchor="middle">
    </circle>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${svg.txtFill}">${svg.text}</text>
    </svg>
    `;
    } else if (svg instanceof Triangle) {
        return `
        <svg xmlns="${svg.xmlns}" version = "${svg.ver}" width = "${svg.width}" height = "${svg.height}">
        <polygon points = "${svg.points}" fill="${svg.shapeFill}" >
    </polygon>
    <text x="100" y="165" font-size="60" text-anchor="middle" fill="${svg.txtFill}">${svg.text}</text>
    </svg>
    `;
    }else {
        return `
        <svg xmlns="${svg.xmlns}" version = "${svg.ver}" width = "${svg.width}" height = "${svg.height}">
        <rect x="${svg.x}" y="${svg.y}" width="${svg.w}" height="${svg.h}" fill="${svg.shapeFill}"></rect>
   
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${svg.txtFill}">${svg.text}</text>
    </svg>
    `;
    }
}