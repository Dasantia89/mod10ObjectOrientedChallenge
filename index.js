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



