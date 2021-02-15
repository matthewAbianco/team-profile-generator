
const Manager = require('../lib/manager');

test('creates a manager object',() =>
{
    const manager = new Manager('matthew',1,'matthewbianco@protonmail.com',1);

    expect(manager.name).toBe('matthew');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('matthewbianco@protonmail.com');
    expect(manager.officeNumber).toBe(1);
});

test('get a manager role',()=>
{
    const manager = new Manager('matthew',1,'matthewbianco@protonmail.com',1);

    expect(manager.getRole()).toEqual('Manager');

});