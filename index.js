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