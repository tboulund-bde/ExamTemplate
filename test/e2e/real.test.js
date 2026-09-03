import { Selector } from 'testcafe';

fixture('TestCafe example page')
    .page('https://devexpress.github.io/testcafe/example/');

test('User can submit the form', async t => {
    const nameInput = Selector('#developer-name');
    const submitButton = Selector('#submit-button');

    await t
        .typeText(nameInput, 'Thomas')
        .click(submitButton)
        .expect(Selector('#article-header').innerText)
        .contains('Thank you');
});