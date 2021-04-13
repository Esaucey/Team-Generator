const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Can Intern extends Employee", () => {
    const example = new Intern(Employee);
    expect(typeof(example)).toBe("object");
})

test("Can we get Intern school through the getSchool()", () => {
    const school = "school name";
    const example = new Intern("Sean", 0, "@mail", school);
    expect(example.school).toBe(school);
})

test("Can we get Intern role through the getRole()", () => {
    const role = "Intern";
    const example = new Intern("Sean", 0, "@mail", "school");
    expect(example.getRole()).toBe(role);
})