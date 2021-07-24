// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username ?",
        name: "UserName",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is the title for your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "Please give description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What necessary dependencies of your project.",
        name: "Installation",
    },
    {
        type: "input",
        message: "What is this app used for?",
        name: "License",
    },
    {
        type: "input",
        message: "What license was used for this README?",
        name: "Contributor",
    },
    {
        type: "input",
        message: "What command do you use to test this App?",
        name: "Test",
    },
];
 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
