// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    }, {
        type: "input",
        name: "installInstructions",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
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
    }

];

// TODO: Create a function to write README file :: a read me folder is created for the generated read me file.
function writeToFile(fileName, data) {
    console.log(fileName)
    fs.writeFile("./readme/" + fileName, generateMarkdown(data), function (err) {
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
            //getting the project name and modifying the name to create a readme file name
            const fileName = answer.title.split(' ').join('') + '.md';
            writeToFile(fileName, answer);
        });
}

// Function call to initialize app
init();