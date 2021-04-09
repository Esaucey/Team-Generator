//use inquirer to grab user input
const { inheritInnerComments } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const Employee = require('./lib/Employee');

const internOutput = new Intern();
const team = [];
const choicesArray =[];

async function addManager() {
    await inquirer.prompt([
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
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerON);
        team.push(manager);
    })
    
};

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
            message: "What is the engineer's office number: "
        }
    ])
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerON);
        team.push(engineer);
        return engineer;

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
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internON);
    team.push(intern);
    return intern;
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
        choicesArray.push(answers.next);
        return answers.next;
};

async function questionsRepeat() {
    let count = 1;
     for (let i = 0; i < count; i++) { 
            if (choicesArray[i] === "Engineer") {
                count++
                await addEngineer();
            } else if (choicesArray[i] === "Intern") {
                count++
                await addIntern();
            } else {
                
            }
            console.log(count);
    };
}

function init() {
    addManager()
    .then(answers => {
        return whatsNext();
    })
    .then(answers => {
        return questionsRepeat();
    })
    .then(answers => {
        console.log(JSON.stringify(choicesArray));
        
    })
    
//     let content = 
// `<!DOCTYPE html>
// <html>
// <head>
// <title>Team Generator</title>
// <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <header>
//         <h1>Team Generator</h1>
//     </header>
//     <section>
//         <div class="card-body">
//             <div class="card-title">
//                 <h2>${managerOutput.getRole()}</h2>
//             </div>
//             <div class="card-content">
//                 <h3>${data.managerName}</h3>
//                 <h3>${data.managerId}</h3>
//                 <address>
//                 <a href="${data.managerEmail}"><h3>${data.managerEmail}</h3></a>
//                 </address>
//                 <h3>${data.managerON}</h3>
//             </div>
//         </div>

//         <div class="card-body">
//             <div class="card-title">
//                 <h2>${engineerOutput.getRole()}</h2>
//             </div>
//             <div class="card-content">
//                 <h3>${data.engineerName}</h3>
//                 <h3>${data.engineerId}</h3>
//                 <address>
//                 <a href="${data.engineerEmail}"><h3>${data.engineerEmail}</h3></a>
//                 </address>
//                 <h3>${data.engineerON}</h3>
//             </div>
//         </div>

//         <div class="card-body">
//             <div class="card-title">
//                 <h2>${internOutput.getRole()}</h2>
//             </div>
//             <div class="card-content">
//                 <h3>${data.internName}</h3>
//                 <h3>${data.internId}</h3>
//                 <address>
//                 <a href="${data.internEmail}"><h3>${data.internEmail}</h3></a>
//                 </address>
//                 <h3>${data.internSchool}</h3>
//             </div>
//         </div>
    
//     <section>
// </body>
// </html>
// `;

//     let style = 
// `header {
//     display: flex;
//     justify-content: center;
//     background-color: red;
// }

// section {
//     display: flex;
//     justify-content: center;
// }

// .card-body {
//     margin: 50px;
//     padding: 15px;
//     background-color: rgb(180, 180, 180);
//     border-radius: 2%;
// }

// .card-title {
//     text-align: center;
//     background-color: antiquewhite;
// }
// `;
//     console.log(data.internName);
//     fs.writeFile('dist/home.html', content, function (err) {
//     if (err) return console.log(err)
//   })
//     fs.writeFile('dist/style.css', style, function (err) {
//     if (err) return console.log(err)
//   })
  
}

init();

//with user input, generate html file
//when email address is clicked, open default email with info
//when Github link is clicked, it opens up their Github profile in a new tab

//when the app starts, we ask the manager info(name, employee ID, email address, and office number)
//after we get manager info, let user pick between making an engineer, intern or build team
//if user pick engineer, get engineer info(name, ID, email, Github), then let user pick between making an engineer, intern or build team
//if user pick intern, get intern info(name, ID, email, school), then let user pick between making an engineer, intern or build team
//when user is finished with info, exit inquirer, generate html.