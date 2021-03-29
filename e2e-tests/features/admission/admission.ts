import { Chance } from 'chance';
import { Selector } from 'testcafe';
import { sideMenu, element } from '../../utilities/common-selectors';
import { setFixture, getLocation, login } from '../../utilities/common-testscripts';
import { credentials } from '../../utilities/credentials';

const chance = new Chance();

setFixture();

test('test the required fields for Admission', async (t) => {
  const details = {
    hospitalName: chance.word(),
    admissionDate: '05/02/2021 03:15 AM',
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('Admission'))
    .expect(getLocation())
    .match(/\/patient\/admission$/i)
    .click(
      Selector('div.heading-table button:not([disabled]) > span').withText(/Add New Admission/i),
    )
    .expect(getLocation())
    .match(/\/patient\/admission\/add$/i)
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Select Date and Time"]').nth(0), details.admissionDate, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[placeholder="Enter Admission Diagnosis"]').nth(0), 'arm', {
      replace: true,
    })
    .click(Selector('div.dropdown-wrapper div.option').nth(0))
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .ok()
    .typeText(Selector('input[name="hospitalName"]').nth(0), details.hospitalName, {
      replace: true,
    })
    .expect(Selector('button[disabled] > span').withText('Save').exists)
    .notOk();
});

test('test to add, edit and delete Admission', async (t) => {
  const details = {
    hospitalName: chance.word(),
    hospitalAddress: chance.address(),
    admissionDate: '05/02/2021 03:15 AM',
    admittedBy: chance.name(),
    doctorInCharge: chance.name(),
    patientNumber: chance.natural({ min: 7, max: 7 }).toString(),
    doctorNote: chance.sentence(),
    nurseNote: chance.sentence(),
    doctorNote2: chance.sentence(),
    nurseNote2: chance.sentence(),
    year: '01',
    month: '06',
    day: '07',
  };

  await login(t, 'patient', credentials.patient);

  await t
    .click(sideMenu('Admission'))
    .expect(getLocation())
    .match(/\/patient\/admission$/i)
    .click(
      Selector('div.heading-table button:not([disabled]) > span').withText(/Add New Admission/i),
    )
    .expect(getLocation())
    .match(/\/patient\/admission\/add$/i)
    .typeText(Selector('input[placeholder="Select Date and Time"]').nth(0), details.admissionDate, {
      replace: true,
    })
    .typeText(Selector('input[name="years"]').nth(0), details.year, { replace: true })
    .typeText(Selector('input[name="months"]').nth(0), details.month, { replace: true })
    .typeText(Selector('input[name="days"]').nth(0), details.day, { replace: true })
    .typeText(Selector('input[name="admittedBy"]').nth(0), details.admittedBy, { replace: true })
    .typeText(Selector('input[name="doctorInCharge"]').nth(0), details.doctorInCharge, {
      replace: true,
    })
    .typeText(Selector('input[placeholder="Enter Admission Diagnosis"]').nth(0), 'arm', {
      replace: true,
    })
    .click(Selector('div.dropdown-wrapper div.option').nth(0))
    .typeText(Selector('input[name="patientFileNumber"]').nth(0), details.patientNumber, {
      replace: true,
    })
    .typeText(Selector('input[name="hospitalName"]').nth(0), details.hospitalName, {
      replace: true,
    })
    .typeText(
      Selector('input[placeholder="Enter Hospital Address"]').nth(0),
      details.hospitalAddress,
      { replace: true },
    )
    .typeText(Selector('textarea[name="findings"]').nth(0), details.doctorNote, { replace: true })
    .typeText(Selector('textarea[name="findings"]').nth(1), details.nurseNote, { replace: true })
    .click(element.button('Save').nth(0))
    .click(sideMenu('Admission'))
    .expect(Selector('div.main-table tr > td').withText(details.admittedBy).exists)
    .ok()
    .expect(Selector('div.main-table tr > td').withText(details.hospitalName).exists)
    .ok()
    .hover(Selector('td > div > svg').nth(0))
    .click(
      Selector('td > div > svg + div.content-padding button').withText(/Edit/i).filterVisible(),
    )
    .expect(getLocation())
    .match(/\/patient\/admission\/.+$/i)
    .click(Selector('div.sub-record button > span').withText(/Add/i).nth(0))
    .typeText(Selector('textarea[name="findings"]').nth(0), details.doctorNote2, { replace: true })
    .click(Selector('div.sub-record button > span').withText(/Save/i).nth(0))
    .click(Selector('div.sub-record button > span').withText(/Edit/i).nth(-1))
    .typeText(Selector('textarea[name="findings"]').nth(0), details.nurseNote2, { replace: true })
    .click(
      Selector('div.sub-record button > span')
        .withText(/Update/i)
        .nth(0),
    )
    .click(
      Selector('button > span')
        .withText(/Update/i)
        .nth(-1),
    )
    .expect(
      Selector(
        'div.react-toast-notifications__container div.react-toast-notifications__toast--success',
      ).withText('Record Updated Successfully').exists,
    )
    .ok()
    .click(sideMenu('Admission'))
    .hover(Selector('td > div > svg').nth(0))
    .click(
      Selector('td > div > svg + div.content-padding button')
        .withText(/Delete/i)
        .filterVisible(),
    )
    .click(
      Selector('div.prompter button > span')
        .withText(/Delete/i)
        .nth(0),
    )
    .expect(
      Selector(
        'div.react-toast-notifications__container div.react-toast-notifications__toast--success',
      ).withText('Record Deleted Successfully').exists,
    )
    .ok();
});
