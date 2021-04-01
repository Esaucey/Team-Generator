const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("Can app make Employee class as an object", () => {
    const example = new Employee();
    expect(typeof(example)).toBe("object");
})

test("Can we set employee name through the constructor", () => {
    const name = "Joe";
    const example = new Employee(name);
    expect(example.name).toBe(name);
})

test("Can we set employee id through the constructor", () => {
    const id = 100;
    const example = new Employee("Name", id);
    expect(example.id).toBe(id);
})

test("Can we set employee email through the constructor", () => {
    const email = "someone@gmail.com";
    const example = new Employee("name", "id", email);
    expect(example.email).toBe(email);
})