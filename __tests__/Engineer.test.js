const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


test("Can Engineer extends Employee", () => {
    const example = new Engineer(Employee);
    expect(typeof(example)).toBe("object");
})

test("can we set GitHub through Engineer constructor", () => {
    const github = "username";
    const example = new Engineer("Sean", 0, "@mail", github);
    expect(example.github).toBe(github);
})

test("Can we get engineer role through the getRole()", () => {
    const role = "Engineer";
    const example = new Engineer("Sean", 0, "@mail", "role");
    expect(example.getRole()).toBe(role);
})