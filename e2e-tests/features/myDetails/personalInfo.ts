import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test to edit personal information', async (t) => {
  const details = {
    email: chance.email(),
    address: chance.address(),
    weight: chance.natural({ min: 45, max: 80 }).toString(),
    height: chance.natural({ min: 130, max: 220 }).toString(),
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Details'))
    .expect(getLocation())
    .match(/\/patient\/details$/i)
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="weight"]').nth(0), details.weight, { replace: true })
    .typeText(Selector('input[name="height"]').nth(0), details.height, { replace: true })
    .typeText(Selector('input[name="email"]').nth(1), details.email, { replace: true })
    .typeText(Selector('input[placeholder="Enter Contact Address"]').nth(0), details.address, {
      replace: true,
    })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="weight"][disabled]').nth(0).value)
    .eql(details.weight)
    .expect(Selector('input[name="height"][disabled]').nth(0).value)
    .eql(details.height)
    .expect(Selector('input[name="email"][disabled]').nth(1).value)
    .eql(details.email)
    .expect(Selector('input[placeholder="Enter Contact Address"][disabled]').nth(0).value)
    .eql(details.address);
});
