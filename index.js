// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub username?.",
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log("Please provide your github Name.");
                return false;
            }
        }
    }, {
        type: "input",
        name: "email",
        message: "What is your email address?.",
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log("Please provide a email Address.");
                return false;
            }
        }
    }, {
        type: "input",
        name: "title",
        message: "What is your project's name?.",
        validate: titleName => {
            if (titleName) {
                return true;
            } else {
                console.log("Please provide a project name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "projectDesc",
        message: "Please write a short description of your project",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Please write a short description.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installInstructions",
        message: "What command should be run to install dependencies?",
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license is used for this project:',
        choices: ['Apache', 'Mozilla', 'MIT', 'GNU', 'Boost', 'ISC'],
        validate: choicesLength => {
            if (choicesLength.length <= 1) {
                return true;
            } else {
                return "Please select one license!";
            }
        }
    },
    {
        type: "input",
        name: "userContribution",
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: "input",
        name: "repoInfo",
        message: " What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./readme/README.md", generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            const fileName =
                answer.title
                    .split(' ')
                    .join('') + '.md';

            writeToFile(fileName, answer);
        });
}

// Function call to initialize app
init();