import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Discharge details', async (t) => {
  const dischargeSummary = chance.sentence();

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('Admission'))
    .expect(getLocation())
    .match(/\/patient\/admission$/i)
    .hover(Selector('td > div > svg').nth(0))
    .click(
      Selector('td > div > svg + div.content-padding button').withText(/View/i).filterVisible(),
    )
    .expect(getLocation())
    .match(/\/patient\/admission\/.+$/i)
    .click(Selector('div[data-tip="Discharge Patient"] > button > svg').nth(0))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('textarea[name="discharge Summary"]').nth(0), dischargeSummary, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Discharge details', async (t) => {
  const details = {
    dischargeDate: '10/03/2021 02:10 AM',
    dischargedBy: chance.name(),
    dischargeSummary: chance.sentence(),
    dischargeSummary2: chance.sentence(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('Admission'))
    .expect(getLocation())
    .match(/\/patient\/admission$/i)
    .hover(Selector('td > div > svg').nth(0))
    .click(
      Selector('td > div > svg + div.content-padding button').withText(/View/i).filterVisible(),
    )
    .expect(getLocation())
    .match(/\/patient\/admission\/.+$/i)
    .click(Selector('div[data-tip="Discharge Patient"] > button > svg').nth(0))
    .typeText(
      Selector('input[placeholder="Select Date and Time"]:not([disabled])').nth(0),
      details.dischargeDate,
      { replace: true },
    )
    .typeText(Selector('input[name="dischargedBy"]').nth(0), details.dischargedBy, {
      replace: true,
    })
    .typeText(Selector('textarea[name="discharge Summary"]').nth(0), details.dischargeSummary, {
      replace: true,
    })
    .click(element.button('Save').nth(0))
    .expect(
      Selector(
        'div.react-toast-notifications__container div.react-toast-notifications__toast--success',
      ).withText('Record Saved Successfully').exists,
    )
    .ok()
    .click(Selector('div.medication-dispense-action-row button > span').withText(/Edit/i).nth(-1))
    .typeText(Selector('textarea[name="discharge Summary"]').nth(0), details.dischargeSummary2, {
      replace: true,
    })
    .click(element.button('Update').nth(0))
    .expect(
      Selector(
        'div.react-toast-notifications__container div.react-toast-notifications__toast--success',
      ).withText('Record Updated Successfully').exists,
    )
    .ok()
    .expect(Selector('div.text-area-readonly').nth(-1).innerText)
    .eql(details.dischargeSummary2)
    .click(
      Selector('div.medication-dispense-action-row button > span')
        .withText(/Delete/i)
        .nth(-1),
    )
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(
      Selector(
        'div.react-toast-notifications__container div.react-toast-notifications__toast--success',
      ).withText('Delete Successful').exists,
    )
    .ok();
});
