//use inquirer to grab user input
const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manage's name"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's ID number"
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