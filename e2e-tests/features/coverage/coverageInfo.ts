import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test to add, edit and delete hmo', async (t) => {
  const details = {
    memberNumber: chance.string({ length: 8, alpha: false, numeric: true }),
    memberPlan: 'Gold',
    memberPlan2: 'Silver',
    memberStartDate: chance.date({ string: true, american: false }).toString(),
    employeeNumber: chance.string({ length: 6, alpha: false, numeric: true }),
    companyName: chance.name(),
    companyAddress: chance.address(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Coverage'))
    .expect(getLocation())
    .match(/\/patient\/coverage$/i)
    .click(element.selectButton.nth(0))
    .pressKey('enter')
    .typeText(Selector('input[name="memberNumber"]').nth(0), details.memberNumber, {
      replace: true,
    })
    .typeText(Selector('input[name="memberPlan"]').nth(0), details.memberPlan, { replace: true })
    .typeText(Selector('input[placeholder="Select Date"]').nth(0), details.memberStartDate, {
      replace: true,
    })
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .typeText(Selector('input[name="employeeNumber"]').nth(0), details.employeeNumber, {
      replace: true,
    })
    .typeText(Selector('input[name="companyName"]').nth(0), details.companyName, { replace: true })
    .typeText(Selector('input[name="text-dropdown"]').nth(0), details.companyAddress, {
      replace: true,
    })
    .click(element.button('Save').nth(0))
    .expect(Selector('input[name="memberNumber"][disabled]').nth(0).value)
    .eql(details.memberNumber)
    .expect(Selector('input[name="memberPlan"][disabled]').nth(0).value)
    .eql(details.memberPlan)
    .expect(Selector('input[name="employeeNumber"][disabled]').nth(0).value)
    .eql(details.employeeNumber)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="memberPlan"]').nth(1), details.memberPlan2, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="memberPlan"][disabled]').nth(0).value)
    .eql(details.memberPlan2)
    .click(element.button('Delete').nth(0))
    .click(element.button('Delete').filterVisible().nth(-1))
    .expect(Selector('input[name="memberPlan"][disabled]').nth(0).value)
    .notEql(details.memberPlan2);
});

test('test HMO name and member status fields are required', async (t) => {
  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Coverage'))
    .expect(getLocation())
    .match(/\/patient\/coverage$/i)
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(0))
    .pressKey('enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .click(element.selectButton.nth(1))
    .pressKey('enter')
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});
