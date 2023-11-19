// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: "What is your project title?",
    },
    {
        type: 'input',
        name: 'Description',
        message: "What is the description of your project?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "What are the instructions for installation?",
    },
    {
        type: 'list',
        name: 'Usage',
        message: "What is the license usage of your project?",
        choices: [
            'Apache License 2.0',
            'GNU General Public License v2.0',
            'MIT License',
            'Boost Software License 1.0',
            'Mozzila Public License',
            'The Unlicense',
            'BSD-2-Clause "Simplified" License',
        ]
    },
    {
        type: 'input',
        name: 'Contribution',
        message: "What are the contribution guidelines for your porject?",
    },
    {
        type: 'input',
        name: 'Tests',
        message: "What are the test instrcutions for your project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {
    // ... ask the questions here
    inquirer.prompt(questions);
    // let responses = {
    //     title: "turtles",
    // };
    console.log(generateMarkdown(responses));

};

// Function call to initialize app
init();
 