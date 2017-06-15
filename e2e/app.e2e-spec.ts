import { OverwatchPugAppPage } from './app.po';

describe('overwatch-pug-app App', () => {
  let page: OverwatchPugAppPage;

  beforeEach(() => {
    page = new OverwatchPugAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
