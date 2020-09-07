// // TODO: Write code to define and export the Employee class
// Minimum Requirements
// Functional application.

// GitHub repository with a unique name and a README describing the project.

// User can use the CLI to generate an HTML page that displays information about their team.

// All tests must pass.

// Classes
// The project must have the these classes: Employee, Manager, Engineer, Intern. The tests for these classes in the tests directory must all pass.

// The first class is an Employee parent class with the following properties and methods:
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
// const dalton = new Employee("dalton", "627", "cdalt@gmail.com");
// console.log(dalton.getId());

// const zac = new Employee("zac", "490", "zac@gmail.com");
// console.log(zac.getId());

exports.Employee = Employee;
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getOfficeNumber()

// getRole() // Overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

// User input
// The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

// Roster output
// The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

// Name

// Role

// ID

// Role-specific property (School, link to GitHub profile, or office number)

// Bonus
// Use validation to ensure that the information provided is in the proper expected format.

// Add the application to your portfolio.

// Commit Early and Often
// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

// Your commit history is a signal to employers that you are actively working on projects and learning new skills.

// Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

// Follow these guidelines for committing:

// Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

// Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

// Don't commit half-done work, for the sake of your collaborators (and your future self!).

// Test your application before you commit to ensure functionality at every step in the development process.

// We would like you to have well over 200 commits by graduation, so commit early and often!

// Submission on BCS
// You are required to submit the following:

// The URL of the GitHub repository

// A video demonstrating the entirety of the app's functionality

// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
