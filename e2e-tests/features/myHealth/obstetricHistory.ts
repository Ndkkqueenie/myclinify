import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Obstetric History', async (t) => {
  const lastChildBirth = '02/02/2021';

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Obstetric History'))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(0))
    .pressKey('down down enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Select Date"]').nth(0), lastChildBirth, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Obstetric History', async (t) => {
  const details = {
    lastChildBirth: '02/02/2021',
    lastChildBirth2: '20/02/2012',
    note: chance.sentence(),
    note2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Obstetric History'))
    .click(element.selectButton.nth(0))
    .pressKey('down down enter')
    .typeText(Selector('input[placeholder="Select Date"]').nth(0), details.lastChildBirth, {
      replace: true,
    })
    .typeText(Selector('textarea[name="additionalNote"]').nth(0), details.note, { replace: true })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[placeholder="Select Date"][disabled]').nth(0).value)
    .eql(details.lastChildBirth)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[placeholder="Select Date"]').nth(1), details.lastChildBirth2, {
      replace: true,
    })
    .typeText(Selector('textarea[name="additionalNote"]').nth(1), details.note2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[placeholder="Select Date"][disabled]').nth(0).value)
    .eql(details.lastChildBirth2)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[placeholder="Select Date"][disabled]').nth(0).value)
    .notEql(details.lastChildBirth2)
    .expect(Selector('div.text-area-readonly').nth(0).value)
    .notEql(details.note2);
});
