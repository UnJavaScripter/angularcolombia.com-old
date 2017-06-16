import { AngularColombiaPage } from './app.po';

describe('angular-colombia App', () => {
  let page: AngularColombiaPage;

  beforeEach(() => {
    page = new AngularColombiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
