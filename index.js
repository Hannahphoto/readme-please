// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

const fs = require("fs");


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {};
// const readmePageContent = ({'Title'})//?????

// TODO: Create a function to initialize app
//GIVEN a command-line application that accepts user input
function init() {
    // ... ask the questions here
    //WHEN I am prompted for information about my application repository
    //WHEN I enter my project title
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    //WHEN I choose a license for my application from a list of options
    // WHEN I enter my GitHub username
    // WHEN I enter my email address
    // WHEN I click on the links in the Table of Contents

    inquirer.prompt([
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
    ])
    
    // .then((answers)) => {
    //     const readmePageContent = generateMarkdown(answers);
    
    //THEN this is displayed as the title of the README
    //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    //THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // THEN I am taken to the corresponding section of the README
    
//     fs.writeFile('readme.md', readmePageContent, (err) =>
//     err? console.log(err) : console.log('Sucessfully creaded readme'))
// };
};

// Function call to initialize app
  //WHEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
init();

