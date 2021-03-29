import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, pageTabs, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test to edit background information', async (t) => {
  const occupation = chance.profession();

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('My Details'))
    .expect(getLocation())
    .match(/\/patient\/details$/i)
    .click(pageTabs('Background Information'))
    .click(element.button('Edit').nth(0))
    .typeText(Selector('input[name="occupation"]').nth(0), occupation, { replace: true })
    .click(element.button('Update').nth(0))
    .expect(Selector('input[name="occupation"][disabled]').nth(0).value)
    .eql(occupation);
});
