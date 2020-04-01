const Employee = require("./employee");
const inquirer = require("inquirer")

class Engineer extends Employee {
    constructor(name, id, email, role, github) {

        super(name, id, email, role);
    
        this.github = github;
    }
    
    getGithub(){
        return this.github;
    }
} 

//  const engineer = new Engineer("name", "id", "role")
// engineer.render()
// engineer.getGithub(name);
// console.log(getGithub)

module.exports = Engineer;