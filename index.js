const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const config = require("package.json");

// connecting to the database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_tracker_db",
});

// error function
connection.connect(function (err) {
  if (err) throw err;
  runDB();
});

// function to ask what to do
function runDB() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Please select an action.",
      choices: [
        "Add a role",
        "Add a department",
        "Add an employee",
        "Update an employee's role",
        "View all roles",
        "View all departments",
        "View all employees",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add a role":
          addRole();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update employee role":
          updateRole();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "View all departments":
          viewDepartments();
          break;

        case "View all employees":
          viewEmployees();
          break;
      }
    });
}
// function to add a new role
function addRole() {
  console.log("Adding a new role");
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "What is the new role called?",
      },
      {
        type: "input",
        name: "roleDepartment",
        message: "What department is the new role under?",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the new role's salary?",
      },
    ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO role (title, department, salary) VALUES ("${answer.roleTitle}", ${roleDepartment}, ${roleSalary});`,
        function (err, data) {
          console.log("Role added");
        }
      );
      connection.end();
    });
}

// function to add department
function addDepartment() {
  console.log("Adding a new department");
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What is the new department called?",
      },
    ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO department (name) VALUES ("${answer.departmentName}");`,
        function (err, data) {
          console.log("Department added");
        }
      );
      connection.end();
    });
}

//  function to add employees
function addEmployee() {
  console.log("Adding a new employee");
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeFN",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "employeeLN",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "employeeRole",
        message: "What is the employee's Role?",
      },
      {
        type: "input",
        name: "employeeDepartment",
        message: "What is the employee's department?",
      },
      {
        type: "input",
        name: "employeeSalary",
        message: "What is the employee's salary?",
      },
    ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO role (title, department, salary) VALUES ("${answer.roleTitle}", ${roleDepartment}, ${roleSalary});`,
        function (err, data) {
          console.log("Role added");
        }
      );
      connection.end();
    });
}
