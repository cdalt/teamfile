// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const { Employee } = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
exports.Intern = Intern;
// const bill = new Intern("sean", "7777", "sean@gmail.com", "Howard University");
