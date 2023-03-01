// created a constructor w/parameter of the information(name,id,email)

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

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

}