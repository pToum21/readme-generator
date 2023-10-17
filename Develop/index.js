// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Name of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project by writing a description detailing your work'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license do you want to give your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What commad would you like to run to install dependiences?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be run to run the test?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What details need to be provider to the user if they want to use the repo'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide deatils to the user about what they need to know for wanting to contribute to the repositiory'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Add all the devolpers that helped work on this project here'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const application = () => {
    inquirer.prompt(questions).then(answers => {
        try {
            fs.writeFileSync("dist/README.md", generateMarkdown(answers))
            console.log("Congratulations Your README.md file is now located in the dist folder, navigate there to view it!")
        } catch (error) {
            console.log(error.message)
        }
    })
}
application();