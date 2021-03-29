import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Family History', async (t) => {
  const condition = 'heart';

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Family History'))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(3))
    .pressKey('down enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Enter Condition"]').nth(0), condition, { replace: true })
    .click(Selector('div.dropdown-section p').nth(0))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Family History', async (t) => {
  const details = {
    firstName: chance.first({ gender: 'male' }),
    lastName: chance.last(),
    middleName: chance.first({ gender: 'male' }),
    dob: '18/02/2021 03:09 AM',
    condition: 'eye',
    note: chance.sentence(),
    firstName2: chance.first({ gender: 'male' }),
    note2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Family History'))
    .click(element.selectButton.nth(0))
    .pressKey(' enter')
    .typeText(Selector('input[name="firstName"]').nth(0), details.firstName, { replace: true })
    .typeText(Selector('input[name="middleName"]').nth(0), details.middleName, { replace: true })
    .typeText(Selector('input[name="lastName"]').nth(0), details.lastName, { replace: true })
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .typeText(Selector('input[placeholder="Enter Date Of Birth"]').nth(0), details.dob, {
      replace: true,
    })
    .click(element.selectButton.nth(2))
    .pressKey('down enter')
    .click(element.selectButton.nth(3))
    .pressKey('down down down enter')
    .typeText(Selector('input[placeholder="Enter Condition"]').nth(0), details.condition, {
      replace: true,
    })
    .click(Selector('div.dropdown-section p').nth(0))
    .typeText(Selector('textarea[name="additionalNote"]').nth(0), details.note, { replace: true })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[name="firstName"][disabled]').nth(0).value)
    .eql(details.firstName)
    .expect(Selector('input[name="lastName"][disabled]').nth(0).value)
    .eql(details.lastName)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="firstName"]').nth(1), details.firstName2, { replace: true })
    .typeText(Selector('textarea[name="additionalNote"]').nth(1), details.note2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="firstName"][disabled]').nth(0).value)
    .eql(details.firstName2)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[name="firstName"][disabled]').nth(0).value)
    .notEql(details.firstName2)
    .expect(Selector('div.text-area-readonly').nth(0).value)
    .notEql(details.note2);
});
