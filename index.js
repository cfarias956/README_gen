const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter title of your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project.",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please enter installation instructions for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions/examples for use.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter usage information!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contributing instructions.",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please provide contributing instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please provide instructions on how to test your application.",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please provide instructions on how to test your application!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Would you like to add a license?",
        choices: ["MIT", "Apache License 2.0", "GNU GPLv3", "*None*"]
    }
];

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};


function init() {
    return inquirer.prompt(questions);
}

init()
.then(data => {
    return generateMD(data);
})
.then(fileContent => {
    return writeToFile("./README.md", fileContent);
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});
