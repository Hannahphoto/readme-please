// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

//THEN this is displayed as the title of the README
    //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    //THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // THEN I am taken to the corresponding section of the README

function ReadmePageContent(title, description, installation, usage, license, contribution, tests, gitHub, email) {
    this.title = title;
    this.description = description;
    this.installation = installation;
    this.usage = usage;
    this.license = license;
    this.contribution = contribution;
    this.tests = tests;
    this.gitHub = gitHub;
    this.email = email;
    }

ReadmePageContent.prototype.generateMarkdown = function(){
        return `${this.title},${this.description}, ${this.installation},${this.usage} ${this.license}, ${this.contribution},${this.tests}, ${this.gitHub}, ${this.email}`
    };


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
            name: 'title',
            message: "What is your project title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "What is the description of your project?",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the instructions for installation?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is the usage of this project?",
        },
        {
            type: 'list',
            name: 'license',
            message: "What is the license usage of your project?",
            choices: [
                'Apache',
                'GNU-GeneralPublic',
                'MIT-License',
                'Boost-Software License 1.0',
                'Mozzila Public License',
                'The Unlicense',
                'BSD-2-Clause "Simplified" License',
                'none',
            ]
        },
        {
            type: 'input',
            name: 'contribution',
            message: "What are the contribution guidelines for your porject?",
        },
        {
            type: 'input',
            name: 'tests',
            message: "What are the test instrcutions for your project?",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is your Git Hub username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your full email.",
        },
    ])
    
    .then(function (answers){
    
    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {};
    const template = generateMarkdown(answers);
    console.log(template);

    fs.writeFile('readme.md', template, function(err){
    if(err){
        console.log(err); 
    }else
    console.log('Sucessfully creaded readme!')})

});
}
// Function call to initialize app
  //WHEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
init();

