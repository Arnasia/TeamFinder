const generateHTML = require('./src/generateHTML')

//packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')