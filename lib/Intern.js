const Employee = require("./employee");
const inquirer = require("inquirer")

class Manager extends Employee {
    constructor(name, id, email, role, school) {

        super(name, id, email, role);
    
        this.school = school;
    }
    
    getSchool(){
        return this.school;
    }
    
} 

module.exports = Manager; 