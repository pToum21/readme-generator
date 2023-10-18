// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    // return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  } else {
    return '';
  }
}
renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description - 💠
* ${data.description}

## Table of Contents - 📋
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Usage - 💎
${data.usage}

## How to Contribute - 🍴
${data.contributing}

## Credits - 📃
${data.credits}

## License - 💳
${data.license}

## Installation - ☢️
 You must run ${data.installation} to download the correct packages.

## Test - 🧪
You must run ${data.test} in the terminal to test the README.md generator.

## Qustions - ❓
Feel Free to contact me at ${data.email} or ${data.github}.
`;
}

module.exports = generateMarkdown;
