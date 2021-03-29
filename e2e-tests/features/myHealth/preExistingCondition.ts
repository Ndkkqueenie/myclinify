import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Pre-existing condition', async (t) => {
  const details = {
    condition: chance.word(),
    diagnosisDate: '05/02/2021 03:15 AM',
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Enter Condition"]').nth(0), details.condition, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Select Date and Time"]').nth(0), details.diagnosisDate, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Pre-existing condition', async (t) => {
  const details = {
    condition: chance.word(),
    diagnosisDate: '23/06/2019 03:15 AM',
    year: '01',
    month: '06',
    day: '07',
    note: chance.sentence(),
    condition2: chance.word(),
    note2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .typeText(Selector('input[placeholder="Enter Condition"]').nth(0), details.condition, {
      replace: true,
    })
    .typeText(Selector('input[placeholder="Select Date and Time"]').nth(0), details.diagnosisDate, {
      replace: true,
    })
    .typeText(Selector('input[name="years"]').nth(0), details.year, { replace: true })
    .typeText(Selector('input[name="months"]').nth(0), details.month, { replace: true })
    .typeText(Selector('input[name="days"]').nth(0), details.day, { replace: true })
    .typeText(Selector('textarea[name="additionalNote"]').nth(0), details.note, { replace: true })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[placeholder="Enter Condition"][disabled]').nth(0).value)
    .eql(details.condition)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[placeholder="Enter Condition"]').nth(1), details.condition2, {
      replace: true,
    })
    .typeText(Selector('textarea[name="additionalNote"]').nth(1), details.note2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[placeholder="Enter Condition"][disabled]').nth(0).value)
    .eql(details.condition2)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[placeholder="Enter Condition"][disabled]').nth(0).value)
    .notEql(details.condition2)
    .expect(Selector('div.text-area-readonly').nth(0).value)
    .notEql(details.note2);
});
