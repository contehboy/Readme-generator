// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contributing guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function generateREADME(answers) {
  let licenseBadge = "";
  let licenseNotice = "";

  if (answers.license !== "None") {
    licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(
      answers.license
    )}-brightgreen)`;
    licenseNotice = `This project is licensed under the ${answers.license} License.`;
  }

  return `
# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${licenseNotice}

## Questions
For any questions or inquiries, please contact me via GitHub or email:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (msg) => {
    console.log("File created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((ans) => {
    const readmeContent = generateREADME(ans);
    writeToFile("Rreadme.md", readmeContent);
  });
}

// Function call to initialize app
init();
