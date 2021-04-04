//use inquirer to grab user input
const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
//manager info
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name: "
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's ID number: "
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's e-mail: "
    },
    {
        type: 'input',
        name: 'managerON',
        message: "What is the manager's office number: "
    },
//engineer info
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name: "
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's ID number: "
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's e-mail: "
    },
    {
        type: 'input',
        name: 'engineerON',
        message: "What is the engineer's office number: "
    },
//intern info
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name: "
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's ID: "
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school: "
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
//with user input, generate html file
//when email address is clicked, open default email with info
//when Github link is clicked, it opens up their Github profile in a new tab

//when the app starts, we ask the manager info(name, employee ID, email address, and office number)
//after we get manager info, let user pick between making an engineer, intern or build team
//if user pick engineer, get engineer info(name, ID, email, Github), then let user pick between making an engineer, intern or build team
//if user pick intern, get intern info(name, ID, email, school), then let user pick between making an engineer, intern or build team
//when user is finished with info, exit inquirer, generate html