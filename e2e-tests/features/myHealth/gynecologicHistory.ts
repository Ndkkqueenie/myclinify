import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Gynecologic History', async (t) => {
  const durationMenses = chance.natural({ min: 2, max: 7 }).toString();

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Gynecologic History'))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(0))
    .pressKey('down enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[name="Duration Of Menstrual Flow"]').nth(0), durationMenses, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Gynecologic History', async (t) => {
  const details = {
    ageMenses: chance.natural({ min: 13, max: 21 }).toString(),
    lengthMenses: chance.natural({ min: 26, max: 31 }).toString(),
    durationMenses: chance.natural({ min: 2, max: 7 }).toString(),
    lmp: '12/04/2008',
    note: chance.sentence(),
    lmp2: '23/12/2018',
    note2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Gynecologic History'))
    .typeText(Selector('input[name="Age of first Menstruation"]').nth(0), details.ageMenses, {
      replace: true,
    })
    .typeText(Selector('input[name="Length Of Menstrual Cycle"]').nth(0), details.lengthMenses, {
      replace: true,
    })
    .typeText(Selector('input[name="Duration Of Menstrual Flow"]').nth(0), details.durationMenses, {
      replace: true,
    })
    .typeText(Selector('input[placeholder="Select Date"]').nth(0), details.lmp, { replace: true })
    .click(element.selectButton.nth(0))
    .pressKey('down enter')
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .click(element.selectButton.nth(2))
    .pressKey('down enter')
    .typeText(Selector('textarea[name="additionalNote"]').nth(0), details.note, { replace: true })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[name="Age of first Menstruation"][disabled]').nth(0).value)
    .eql(details.ageMenses)
    .expect(Selector('input[name="Length Of Menstrual Cycle"][disabled]').nth(0).value)
    .eql(details.lengthMenses)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[placeholder="Select Date"]').nth(1), details.lmp2, { replace: true })
    .typeText(Selector('textarea[name="additionalNote"]').nth(1), details.note2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[placeholder="Select Date"][disabled]').nth(0).value)
    .eql(details.lmp2)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[placeholder="Select Date"][disabled]').nth(0).value)
    .notEql(details.lmp2)
    .expect(Selector('div.text-area-readonly').nth(0).value)
    .notEql(details.note2);
});
