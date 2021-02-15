const Employee = require('../lib/Employee');

test('creates an Employee object',()=>
{
    const employee = new Employee('matthew',1,'matthewbianco@protonmail.com');

    expect(employee.name).toBe('matthew');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('matthewbianco@protonmail.com');
});

test('get an Employee name',()=>
{
    const employee = new Employee('matthew',1,'matthewbianco@protonmail.com');

    expect(employee.getName()).toEqual(employee.name);

});

test('get an Employee ID',()=>
{
    const employee = new Employee('matthew',1,'matthewbianco@protonmail.com');

    expect(employee.getId()).toEqual(employee.id);

});

test('get an Employee email',()=>
{
    const employee = new Employee('matthew',1,'matthewbianco@protonmail.com');

    expect(employee.getEmail()).toEqual(employee.email);

});

