// If there is no license, this will no return a badge in the readme
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  } else {
    return '';
  }
}
// If there is no license, this will return an empty string but if there is a licenses beging used it will return the licenses link in the table of contents 
function renderLicenseLink(license) { 
  if (license !== 'None') {
    return '* [License](#license---💳)';
  } else {
    return '';
  }
}

// If there is no license, this returns an empty string, if there is it creates a licenses section
function renderLicenseSection(license) { 
  if (license !== 'None') {
    return `## License - 💳\n\n
    This Project is licensed under the ${license} license `;
  } else {
    return '';
  }
}

// This function writes all the markdown in the readme.md
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description - 💠
* ${data.description}

## Table of Contents - 📋
* [Installation](#installation---☢️)
* [Usage](#usage---💎)
${renderLicenseLink(data.license)}
* [How to Contribute](#how-to-contribute---🍴)
* [Credits](#credits---📃)
* [Test](#test---🧪)
* [Questions](#qustions---❓)

## Usage - 💎
${data.usage}

## How to Contribute - 🍴
${data.contributing}

## Credits - 📃
${data.credits}

${renderLicenseSection(data.license)}

## Installation - ☢️
 You must run ${data.installation} to download the correct packages.

## Test - 🧪
You must run ${data.test} in the terminal to test the README.md generator.

## Qustions - ❓
Feel Free to contact me at ${data.email} or [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
