
const Intern = require('../lib/intern');

test('create an Intern object',() =>
{
    const intern = new Intern('matthew',1,'matthewbianco@protonmail.com','UofT');

    expect(intern.name).toBe('matthew');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('matthewbianco@protonmail.com');
    expect(intern.school).toBe('UofT');
});

test('get an Intern school',()=>
{
    const intern = new Intern('matthew',1,'matthewbianco@protonmail.com','UofT');

    expect(intern.getSchool()).toEqual('UofT');

});

test('get an Intern role',()=>
{
    const intern = new Intern('matthew',1,'matthewbianco@protonmail.com','UofT');

    expect(intern.getRole()).toEqual('Intern');

});