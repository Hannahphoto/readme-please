// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
  if(license){
    return `${license}](https://img.shields.io/badge/License-${license}-brightness.svg)](https://opensource.org/license/${license})`;
  }else
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// which license the application is covered under
// WHEN I enter my GitHub username
function renderLicenseLink(license) {
  if(license){
    return `(https://opensource.org/license/${license})`
  }else
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if(license){
    return `## License
    This project is licensed under the [License](https://opensource.org/license/${license}) license.`
  }else
  return '';
};

// TODO: Create a function to generate markdown for README
// generate mark down putput a sting - temperate literal. 
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#Contribution)
  * [Tests](#tests)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseLink(data.license)}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  * GitHub - [${data.gitHub}](https://github.com/${data.gitHub})
  * Email - ${data.email}
  ${renderLicenseSection(data.license)}
  `;
};

module.exports = generateMarkdown;
