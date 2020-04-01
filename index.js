const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const htmlRenderer = require("./lib/htmlRenderer");
console.dir(htmlRenderer);
var employees = [];

async function start() {
  while (true) {
    const employee = await inquirer.prompt([
      {
        type: "list",
        message: "Please select a task",
        choices: [
          "I would like to enter an employee",
          "I would like to exit the program"
        ],
        name: "options"
      },
      { 
        type: "confirm",
        message: "Are you sure you want to exit the program?",
        name: "exit",
        when: function(answers) {
          if (answers.options === "I would like to exit the program") {
            const output = htmlRenderer(employees);
            fs.writeFileSync("team.html", output);
            process.exit();
          }
          return false;
        }
      },
      {
        type: "input",
        message: "Please enter the Employee's name: ",
        name: "name"
      },
      {
        type: "input",
        message: "Please enter Employee ID: ",
        name: "id"
      },
      {
        type: "input",
        message: "Please enter Employee Email: ",
        name: "email"
      },
      {
        type: "list",
        message: "Please select role: ",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
      }
    ]);

    await createEmployee(employee);
  }
}
async function createEmployee({ name, id, email, role }) {
  console.log(name, id, email, role);
  if (role === "Engineer") {
    const github = await inquirer
      .prompt([
        {
          type: "input",
          message: "Enter employee Github",
          name: "github"
        }
      ]);

    console.log("creating engineer");
    const engineer = new Engineer(name, id, email, role, github);
    employees.push(engineer);
  }
}

function exit() {
  return;
}
start();
