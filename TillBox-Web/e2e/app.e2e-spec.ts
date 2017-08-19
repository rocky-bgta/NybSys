import { TillBoxWebPage } from './app.po';

describe('till-box-web App', function() {
  let page: TillBoxWebPage;

  beforeEach(() => {
    page = new TillBoxWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
