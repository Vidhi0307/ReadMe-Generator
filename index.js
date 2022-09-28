// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Briefly give an explanation of your project. (Required)",

    },
    {
        type: "input",
        name: "installInfo",
        message: "Provide any installation instructions here:",
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license is used for this project:',
        choices: ['Apache', 'Mozilla', 'MIT', 'GNU', 'Boost', 'ISC'],

    },
    {
        type: "input",
        name: "usageInfo",
        message: "Describe the main use case for this project/application:",
    },
    {
        type: "input",
        name: "contributionsInfo",
        message: "Are their any guidlines for contributing to this project:",
    },
    {
        type: "input",
        name: "testsInfo",
        message: "Which tests would you like to include:",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username (Required)?",
    },
    {
        type: "input",
        name: "emailInfo",
        message: "What is a good email someone can reach you(Required)?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
