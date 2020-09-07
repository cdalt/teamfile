// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const { Employee } = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
exports.Engineer = Engineer;
// const sean = new Engineer("sean", "7777", "sean@gmail.com", "sean");

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
