import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test to add, edit and delete next of kin', async (t) => {
  const details = {
    firstName: chance.first({ gender: 'male' }),
    lastName: chance.last(),
    occupation: chance.profession(),
    email: chance.email(),
    address: chance.address(),
    occupation2: chance.profession(),
    address2: chance.address(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Details'))
    .expect(getLocation())
    .match(/\/patient\/details$/i)
    .click(pageTabs('Next of Kin'))
    .click(element.selectButton.nth(0))
    .pressKey('enter')
    .typeText(Selector('input[name="firstName"]').nth(0), details.firstName, { replace: true })
    .typeText(Selector('input[name="lastName"]').nth(0), details.lastName, { replace: true })
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .click(element.selectButton.nth(2))
    .pressKey('enter')
    .click(element.selectButton.nth(3))
    .pressKey('down down down enter')
    .typeText(Selector('input[name="occupation"]').nth(0), details.occupation, { replace: true })
    .typeText(Selector('input[name="email"]').nth(0), details.email, { replace: true })
    .typeText(Selector('input[placeholder="Enter Contact Address"]').nth(0), details.address, {
      replace: true,
    })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[name="firstName"][disabled]').nth(0).value)
    .eql(details.firstName)
    .expect(Selector('input[name="lastName"][disabled]').nth(0).value)
    .eql(details.lastName)
    .expect(Selector('input[name="occupation"][disabled]').nth(0).value)
    .eql(details.occupation)
    .expect(Selector('input[name="email"][disabled]').nth(0).value)
    .eql(details.email)
    .expect(Selector('input[placeholder="Enter Contact Address"][disabled]').nth(0).value)
    .eql(details.address)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="occupation"]').nth(1), details.occupation2, { replace: true })
    .typeText(Selector('input[placeholder="Enter Contact Address"]').nth(1), details.address2, {
      replace: true,
    })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="occupation"][disabled]').nth(0).value)
    .eql(details.occupation2)
    .expect(Selector('input[placeholder="Enter Contact Address"][disabled]').nth(0).value)
    .eql(details.address2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[name="occupation"][disabled]').nth(0).value)
    .notEql(details.occupation2)
    .expect(Selector('input[placeholder="Enter Contact Address"][disabled]').nth(0).value)
    .notEql(details.address2);
});

test('test the required fields for next of kin', async (t) => {
  const details = {
    firstName: chance.first({ gender: 'male' }),
    lastName: chance.last(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Details'))
    .expect(getLocation())
    .match(/\/patient\/details$/i)
    .click(pageTabs('Next of Kin'))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(3))
    .pressKey('down down down enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[name="firstName"]').nth(0), details.firstName, { replace: true })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[name="lastName"]').nth(0), details.lastName, { replace: true })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});
