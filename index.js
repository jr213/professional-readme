// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Give your project a title.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.'
    },
    {
        type: 'input',
        name: 'installInfo',
        message: 'Does the user need any installation instructions?'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter any usage instructions here.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Would you like to give credit to anyone else?'
    },
    {
        type: 'input',
        name: 'testInfo',
        message: 'Enter any test instructions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.'
    },
    {
        type: 'list',
        name: ' license',
        message: 'Choose a license below.',
        choices: ['No License', 'MIT', 'Eclipse', 'Apache', 'Mozilla']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
