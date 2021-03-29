import { Selector } from 'testcafe';

export const sideMenu = (text: string) => Selector('div.nav-item > span').withText(`${text}`);

export const pageTabs = (text: string) => Selector('div.tab-item > span').withText(`${text}`);

export const element = {
  selectButton: Selector('div.react-select__control svg'),
  button: (text: string) => Selector('button > span').withText(`${text}`),
};
