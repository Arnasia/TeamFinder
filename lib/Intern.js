// just as i did in engineer.js folder i will import employee constructor and add school and change out role from employee to intern
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
    }

    getSchool (){
        return this.school;
    }

    getRole (){
        return "Intern";
    }
};

module.exports = Intern;
