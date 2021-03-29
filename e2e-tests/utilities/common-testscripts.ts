import { Selector, ClientFunction } from 'testcafe';
import { credentials } from './credentials';

const { origin } = credentials;

export const setFixture = () => fixture(`Clinify web app e2e`).page(origin);

export const getLocation = ClientFunction(() => document.location.href);
export const forcePageReload = ClientFunction(() => document.location.reload());
export const goBack = ClientFunction(() => window.history.back());

export const login = async (t: TestController, type: string, credentials: any) => {
  const inputSelector = (attr: string, value: string) => Selector(`input[${attr}="${value}"]`);

  await t
    .expect(getLocation())
    .match(/\/login$/i)
    .expect(Selector('div.welcome > h2').innerText)
    .contains('Welcome');

  if (type === 'organisation') {
    await t
      .click(Selector('div.login-group + button').nth(0))
      .typeText(inputSelector('name', 'email'), credentials.user, { replace: true })
      .typeText(inputSelector('name', 'password'), credentials.password, { replace: true })
      .click(Selector('button').withText(/Login/i))
      .expect(getLocation())
      .match(/\/(hmo\/enrollment$)|(hospital\/lookup$)/i)
      .expect(Selector('nav > div.nav-content').exists)
      .ok();
  } else if (type === 'patient') {
    await t
      .click(Selector('div.login-group + button').nth(1))
      .click(inputSelector('name', 'phoneNumber'))
      .pressKey(credentials.user.split('').join(' '))
      .typeText(inputSelector('type', 'password'), credentials.password, { replace: true })
      .click(Selector('button').withText(/Login/i))
      .expect(getLocation())
      .match(/\/patient\/overview$/i)
      .expect(Selector('nav > div.nav-content').exists)
      .ok();
  }
};
