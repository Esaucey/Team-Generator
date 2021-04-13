//use inquirer to grab user input
const { inheritInnerComments } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const Employee = require('./lib/Employee');

const team = [];

async function addManager() {
    let answers = await inquirer.prompt([
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
        }
    ])
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerON);
    team.push(`    
        <div class="card-body">
            <div class="card-title">
                <h2>${manager.getRole()}</h2>
            </div>
            <div class="card-content">
                <h3>Name: ${manager.getName()}</h3>
                <h3>ID: ${manager.getId()}</h3>
                <address>
                <h3>E-mail: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h3>
                </address>
                <h3>Office Number: ${manager.getOfficeNumber()}</h3>
            </div>
        </div>
    `);
    await whatsNext();
}

async function addEngineer() {
    let answers = await inquirer.prompt([ 
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
            message: "What is the engineer's Github: "
        }
    ])
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerON);
        team.push(`    
        <div class="card-body">
             <div class="card-title">
                 <h2>${engineer.getRole()}</h2>
             </div>
             <div class="card-content">
                 <h3>Name: ${engineer.getName()}</h3>
                 <h3>ID: ${engineer.getId()}</h3>
                 <address>
                 <h3>E-mail: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h3>
                 </address>
                 <h3>Github Name: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></h3>
             </div>
        </div>
    `);
        await whatsNext();
};

async function addIntern() {
    let answers = await inquirer.prompt([ 
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name: "
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's ID number: "
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's e-mail: "
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school: "
        }
    ])
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    team.push(`    
        <div class="card-body">
            <div class="card-title">
                <h2>${intern.getRole()}</h2>
            </div>
            <div class="card-content">
                <h3>Name: ${intern.getName()}</h3>
                <h3>ID: ${intern.getId()}</h3>
                <address>
                <h3>E-mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h3>
                </address>
                <h3>School Name: ${intern.getSchool()}</h3>
            </div>
        </div>
        `);
    await whatsNext();
}

async function whatsNext() {
    let answers = await inquirer.prompt([
        {
        type: 'list',
        name: 'next',
        message: "Adding more members",
        choices: ['Engineer', 'Intern', 'Complete']
        }  
    ])
     if (answers.next === "Engineer") {
        await addEngineer();
    } else if (answers.next === "Intern") {
        await addIntern();
    } else {
        console.log("Complete!");
    }
};

function init() {
    addManager()
    .then(next => {
        let content = 
`<!DOCTYPE html>
<html>
<head>
<title>Team Generator</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Team Generator</h1>
    </header>
    <section>
        ${team.join("\n")}

    <section>
</body>
</html>
`;

    let style = 
`header {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: rgb(155, 212, 238);
}

section {
    display: flex;
    justify-content: center;
}

.card-body {
    margin: 50px;
    padding: 15px;
    background-color: rgb(180, 180, 180);
    border-radius: 2%;
}

.card-title {
    text-align: center;
    background-color: antiquewhite;
}
`;

    fs.writeFile('dist/home.html', content, function (err) {
    if (err) return console.log(err)
  })
    fs.writeFile('dist/style.css', style, function (err) {
    if (err) return console.log(err)
  })
    })
}

init();