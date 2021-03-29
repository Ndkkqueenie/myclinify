import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Social History', async (t) => {
  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Social History'))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(0))
    .pressKey('down down enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(1))
    .pressKey('down down enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Social History', async (t) => {
  const details = {
    type: chance.word(),
    year: '01',
    month: '06',
    day: '07',
    note: chance.sentence(),
    type2: chance.word(),
    note2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Social History'))
    .click(element.selectButton.nth(0))
    .pressKey('down down enter')
    .typeText(Selector('input[name="years"]').nth(0), details.year, { replace: true })
    .typeText(Selector('input[name="months"]').nth(0), details.month, { replace: true })
    .typeText(Selector('input[name="days"]').nth(0), details.day, { replace: true })
    .typeText(Selector('input[name="Type"]').nth(0), details.type, { replace: true })
    .click(element.selectButton.nth(1))
    .pressKey('down down enter')
    .typeText(Selector('textarea[name="additionalNote"]').nth(0), details.note, { replace: true })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[name="Type"][disabled]').nth(0).value)
    .eql(details.type)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="Type"]').nth(0), details.type2, { replace: true })
    .typeText(Selector('textarea[name="additionalNote"]').nth(1), details.note2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="Type"][disabled]').nth(0).value)
    .eql(details.type2)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[name="Type"][disabled]').nth(0).value)
    .notEql(details.type2)
    .expect(Selector('div.text-area-readonly').nth(0).value)
    .notEql(details.note2);
});
