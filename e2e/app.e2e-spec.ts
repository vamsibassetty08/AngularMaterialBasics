import { MdCardImagesPage } from './app.po';

describe('md-card-images App', () => {
  let page: MdCardImagesPage;

  beforeEach(() => {
    page = new MdCardImagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
