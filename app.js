//Node Modules
const path = require("path");
const fs = require("fs");
// NPM Modules
const inquirer = require("inquirer");
// Constructors
const { Manager } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
inquirer
  .prompt([
    {
      name: "manager",
      message:
        "Whos your manager(input a name, id, email, and office number seperated by spaces)?",
    },
    {
      name: "engineer",
      message:
        "Who are your engineers?(input a name, id, email, and github seperated by spaces, also seperate each engineer with vertical bars)?",
    },
    {
      name: "intern",
      message: "Who are the Interns?",
    },
  ])
  .then((response) => {
    const box = response.manager.split(" ");
    const manager = new Manager(box[0], box[1], box[2], box[3]);
    const box2 = response.engineer.split("|");
    const engineers = box2.map((eng) => {
      const engsplit = eng.split(" ");
      return new Engineer(engsplit[0], engsplit[1], engsplit[2], engsplit[3]);
    });
    const box3 = response.intern.split("|");
    const interns = box3.map((intern) => {
      const insplit = intern.split(" ");
      return new Intern(insplit[0], insplit[1], insplit[2], insplit[3]);
    });
    console.log(interns);
  });

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
