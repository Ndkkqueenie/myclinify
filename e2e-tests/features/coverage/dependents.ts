import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test to add, edit and delete dependent', async (t) => {
  const details = {
    firstName: chance.first({ gender: 'male' }),
    lastName: chance.last(),
    middleName: chance.first({ gender: 'male' }),
    dob: chance.birthday({ string: true, american: false }).toString(),
    firstName2: chance.first({ gender: 'male' }),
    lastName2: chance.last(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Coverage'))
    .expect(getLocation())
    .match(/\/patient\/coverage$/i)
    .click(pageTabs('Dependents'))
    .click(element.selectButton.nth(0))
    .pressKey('enter')
    .typeText(Selector('input[name="firstName"]').nth(0), details.firstName, { replace: true })
    .typeText(Selector('input[name="middleName"]').nth(0), details.middleName, { replace: true })
    .typeText(Selector('input[name="lastName"]').nth(0), details.lastName, { replace: true })
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .typeText(Selector('input[placeholder="Select Date"]').nth(0), details.dob, { replace: true })
    .click(element.selectButton.nth(2))
    .pressKey('enter')
    .click(element.selectButton.nth(3))
    .pressKey('down down down enter')
    .click(element.button('Save').nth(0))
    .expect(Selector('input[name="firstName"][disabled]').nth(0).value)
    .eql(details.firstName)
    .expect(Selector('input[name="middleName"][disabled]').nth(0).value)
    .eql(details.middleName)
    .expect(Selector('input[name="lastName"][disabled]').nth(0).value)
    .eql(details.lastName)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="firstName"]').nth(1), details.firstName2, { replace: true })
    .typeText(Selector('input[name="lastName"]').nth(1), details.lastName2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="firstName"][disabled]').nth(0).value)
    .eql(details.firstName2)
    .expect(Selector('input[name="lastName"][disabled]').nth(0).value)
    .eql(details.lastName2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[name="firstName"][disabled]').nth(0).value)
    .notEql(details.firstName2)
    .expect(Selector('input[name="lastName"][disabled]').nth(0).value)
    .notEql(details.lastName2);
});
