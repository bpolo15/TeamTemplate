const Employee = require("./employee");


class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {

        super(name, id, email, role);
    
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }
    
} 
console.log(this.officeNumber)
module.exports = Manager; 