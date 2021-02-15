const inquirer = require("inquirer");
const fs = require("fs");

const CSS = require("./CSS/css")

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")


let teamArray = [];


function startingPrompt() {
    inquirer.prompt([
        {   
            type: 'input',
            message: "Welcome to the Matthew Bianco 'Team Generating' program. Please begin by entering the name of your team",
            name: "teamname",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the team manager’s name!');
                  return false;
                }
            }
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            teamArray.push(teamName)
            addManager();
        })

    
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Add an engineer", "Add an intern", "I am done adding team members"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Add an engineer":
                    addEngineer();
                    break;

                case "Add an intern":
                    addIntern();
                    break;
                case "I am done adding team members":
                    compileTeam();
                    break;
            }
        });
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: "name",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the team manager’s name!');
                  return false;
                }
            }
        },
        
        {
            type: 'input',
            message: "What is your team manager's email address?",
            name: "email",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the team manager’s email address!');
                  return false;
                }
            }
        },

        {
            type: "number",
            message: "What is your team manager's employee ID?",
            name: "officeNumber",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the team manager’s employee ID!');
                  return false;
                }
            }
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            teamArray.push(teamMember)
            addTeamMembers();
        });

}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',   
            message: "What is this engineer's name?",
            name: "name",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('you must enter your engineers name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is this engineer's email address?",
            name: "email",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the engineers email address!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is this engineer's Github profile?",
            name: "github",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the engineers github profile!');
                  return false;
                }
            }
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is this intern's name?",
            name: "name",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the interns name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is this intern's email address?",
            name: "email",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter the interns email address!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is this intern's school?",
            name: "school",
            validate: input => 
            {
                if (input) 
                {
                  return true;
                } else {
                  console.log('You need to enter interns school!');
                  return false;
                }
            }
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log(" Team Generation completed. Check the 'Finished' folder")

    const htmlArray = []
    const htmlStart = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamArray[0]}</title>
    <style>
     ${CSS}
    </style>
</head>

<body>
    <div class="banner-bar">
        <h1>${teamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlStart);

    for (let i = 1; i < teamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamArray[i].name}</h2>
                <h2>${teamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamArray[i].id}</p>
                <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a>></p>
        `
        if (teamArray[i].officeNumber) {
            object += `
            <p>ID: ${teamArray[i].officeNumber}</p>
            `
        }
        if (teamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></p>
            `
        }
        if (teamArray[i].school) {
            object += `
            <p>School: ${teamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./finished/${teamArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

startingPrompt()

