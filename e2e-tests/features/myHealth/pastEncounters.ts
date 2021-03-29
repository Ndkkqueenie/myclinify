import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Past Encounters', async (t) => {
  const details = {
    symptoms: `${chance.word().split('').join(' ')} enter`,
    diagnosisDate: '05/02/2021 03:15 AM',
    diagnosis: 'fever',
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Past Encounters'))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Select Date and Time"]').nth(0), details.diagnosisDate, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Enter Diagnosis"]').nth(0), details.diagnosis, {
      replace: true,
    })
    .click(Selector('div.dropdown-section p').nth(0))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(Selector('div.badge-input input').nth(0))
    .pressKey(details.symptoms)
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Past Encounters', async (t) => {
  const details = {
    symptoms: `${chance.word().split('').join(' ')} enter`,
    diagnosisDate: '05/02/2021 03:15 AM',
    diagnosis: 'fever',
    year: '01',
    month: '06',
    day: '07',
    diagnosedBy: chance.name(),
    hospitalName: chance.last(),
    hospitalAddress: chance.address(),
    note: chance.sentence(),
    diagnosedBy2: chance.name(),
    note2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Health'))
    .expect(getLocation())
    .match(/\/patient\/health$/i)
    .click(pageTabs('Past Encounters'))
    .typeText(Selector('input[placeholder="Select Date and Time"]').nth(0), details.diagnosisDate, {
      replace: true,
    })
    .typeText(Selector('input[name="years"]').nth(0), details.year, { replace: true })
    .typeText(Selector('input[name="months"]').nth(0), details.month, { replace: true })
    .typeText(Selector('input[name="days"]').nth(0), details.day, { replace: true })
    .typeText(Selector('input[placeholder="Enter Diagnosis"]').nth(0), details.diagnosis, {
      replace: true,
    })
    .click(Selector('div.dropdown-section p').nth(0))
    .typeText(Selector('input[name="disgnosedBy"]').nth(0), details.diagnosedBy, { replace: true })
    .click(element.selectButton.nth(0))
    .pressKey('down enter')
    .click(Selector('div.badge-input input').nth(0))
    .pressKey(details.symptoms)
    .typeText(Selector('input[name="hospitalName"]').nth(0), details.hospitalName, {
      replace: true,
    })
    .typeText(
      Selector('input[placeholder="Enter Hospital Address"]').nth(0),
      details.hospitalAddress,
      { replace: true },
    )
    .typeText(Selector('textarea[name="additionalNote"]').nth(0), details.note, { replace: true })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[name="disgnosedBy"][disabled]').nth(0).value)
    .eql(details.diagnosedBy)
    .expect(Selector('input[name="hospitalName"][disabled]').nth(0).value)
    .eql(details.hospitalName)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="disgnosedBy"]').nth(1), details.diagnosedBy2, { replace: true })
    .typeText(Selector('textarea[name="additionalNote"]').nth(1), details.note2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="disgnosedBy"][disabled]').nth(0).value)
    .eql(details.diagnosedBy2)
    .expect(Selector('div.text-area-readonly').nth(0).innerText)
    .eql(details.note2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[name="disgnosedBy"][disabled]').nth(0).value)
    .notEql(details.diagnosedBy2)
    .expect(Selector('div.text-area-readonly').nth(0).value)
    .notEql(details.note2);
});
