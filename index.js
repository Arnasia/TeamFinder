const generateTeam = require('./src/generateHTML')

//packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

//array for team input
const theTeam = []

//prompt for manager questions
const createManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager name of this team?'
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the manager's ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the manager's email."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please insert the manager's office number",
            validate: officeNumber => {
                if  (isNaN(officeNumber)) {
                    console.log ('Please enter a valid office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInfo => {
        const  { name, id, email, officeNumber } = managerInfo; 
        const manager = new Manager (name, id, email, officeNumber);

        theTeam.push(manager); 
        console.log(manager); 
    })
};

const addMember = () => {
    console.log(`Let's Add To The Team!!`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(teamData => {
        
        //data for team members

        let { name, id, email, role, github, school, confirmAddMember } = teamData; 
        let member; 

        if (role === "Engineer") {
            member = new Engineer (name, id, email, github);

            console.log(member);

        } else if (role === "Intern") {
            member = new Intern (name, id, email, school);

            console.log(member);
        }

        theTeam.push(member); 

        if (confirmAddMember) {
            return addMember(theTeam); 
        } else {
            return theTeam;
        }
    })
};

//instructing where this data should be written to
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if statement in case of error 
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You've Successfully Created Your Team! Please view your new HTML")
        }
    })
}; 

createManager()
  .then(addMember)
  .then(theTeam => {
    return generateHTML(theTeam);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
