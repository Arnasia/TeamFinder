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