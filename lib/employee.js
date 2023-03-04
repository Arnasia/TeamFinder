// created a constructor w/parameter of the information(name,id,email)

const { createPromptModule } = require("inquirer");

class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // this section we will return the input for name,id,email and role of the employee
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
};

module.exports = Employee;