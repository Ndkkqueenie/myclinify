import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test to add, edit and delete Transfer details', async (t) => {
  const details = {
    transferDate: '10/03/2021 02:10 AM',
    transferedBy: chance.name(),
    reason: chance.sentence(),
    reason2: chance.sentence(),
    hospitalName: chance.name(),
    hospitaladdress: chance.address(),
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
    .click(Selector('div[data-tip="Transfer Patient"] > button > svg').nth(0))
    .typeText(
      Selector('input[placeholder="Select Date and Time"]:not([disabled])').nth(0),
      details.transferDate,
      { replace: true },
    )
    .typeText(Selector('input[name="transferredBy"]').nth(0), details.transferedBy, {
      replace: true,
    })
    .typeText(Selector('textarea[name="reason"]').nth(0), details.reason, { replace: true })
    .typeText(Selector('input[name="hospitalName"]:not([disabled])').nth(0), details.hospitalName, {
      replace: true,
    })
    .typeText(
      Selector('input[placeholder="Enter Hospital Address"]:not([disabled])').nth(0),
      details.hospitaladdress,
      { replace: true },
    )
    .click(element.button('Save').nth(0))
    .expect(
      Selector(
        'div.react-toast-notifications__container div.react-toast-notifications__toast--success',
      ).withText('Record Saved Successfully').exists,
    )
    .ok()
    .click(Selector('div.medication-dispense-action-row button > span').withText(/Edit/i).nth(-1))
    .typeText(Selector('textarea[name="reason"]').nth(0), details.reason2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(
      Selector(
        'div.react-toast-notifications__container div.react-toast-notifications__toast--success',
      ).withText('Record Updated Successfully').exists,
    )
    .ok()
    .expect(Selector('div.text-area-readonly').nth(-1).innerText)
    .eql(details.reason2)
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
