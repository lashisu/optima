import { OptimaPage } from './app.po';

describe('optima App', () => {
  let page: OptimaPage;

  beforeEach(() => {
    page = new OptimaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
