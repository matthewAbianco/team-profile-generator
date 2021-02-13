const Engineer = require('../lib/engineer');

test('create an Engineer object',() =>
{
    const engineer = new Engineer('matthew',1,'matthewbianco@protonmail.com','matthewAbianco');

    expect(engineer.name).toBe('matthew');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('matthewbianco@protonmail.com');
    expect(engineer.github).toBe('matthewAbianco');
});

test('get an Engineer github',()=>
{
    const engineer = new Engineer('matthew',1,'matthewbianco@protonmail.com','matthewAbianco');

    expect(engineer.getGithub()).toEqual('matthewAbianco');

});

test('get an Engineer role',()=>
{
    const engineer = new Engineer('matthew',1,'matthewbianco@protonmail.com','matthewAbianco');

    expect(engineer.getRole()).toEqual('Engineer');

});