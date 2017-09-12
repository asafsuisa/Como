import { ComoProjPage } from './app.po';

describe('como-proj App', () => {
  let page: ComoProjPage;

  beforeEach(() => {
    page = new ComoProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
