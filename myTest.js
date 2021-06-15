import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `./simpleForm.html`;

test('My first test', async t => {

    var value = 9;

    await t
        .typeText('#quantity', value.toString())
        .click('#calc')
        .expect(Selector('#total').innerText).eql("92");
});