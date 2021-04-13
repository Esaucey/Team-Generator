const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Can Manager extends Employee", () => {
    const example = new Manager(Employee);
    expect(typeof(example)).toBe("object");
})

test("can we set officeNumber through Manager constructor", () => {
    const officeNumber = 2
    const example = new Manager("Sean", 0, "@mail", officeNumber);
    expect(example.officeNumber).toBe( officeNumber);
})

test("Can we get Manager role through the getRole()", () => {
    const role = "Manager";
    const example = new Manager("Sean", 0, "@mail", 2);
    expect(example.getRole()).toBe(role);
})