// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const { Employee } = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
exports.Manager = Manager;

// const joe = new Manager("sean", "7777", "sean@gmail.com", "25");
