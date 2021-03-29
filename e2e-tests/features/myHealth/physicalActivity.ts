import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Physical Activity', async (t) => {
  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Physical Activity'))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(0))
    .pressKey('down enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Physical Activity', async (t) => {
  const details = {
    note: chance.sentence(),
    note2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Physical Activity'))
    .click(element.selectButton.nth(0))
    .pressKey('down enter')
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .typeText(Selector('textarea[name="additionalNote"]').nth(0), details.note, { replace: true })
    .click(element.button('Save').nth(0))
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('textarea[name="additionalNote"]').nth(1), details.note2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('div.text-area-readonly').nth(0).value)
    .notEql(details.note2);
});
