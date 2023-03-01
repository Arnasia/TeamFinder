// importing Employee constructor to Engineer
const Employee = require("./Employee");
//adding extension from the employee constructor
class Engineer extends Employee{
    constructor (name,id,email,github){
        super (name,id,email);

        this.github = github;
    }
}