import { AngularBlogAppPage } from './app.po';

describe('angular-blog-app App', () => {
  let page: AngularBlogAppPage;

  beforeEach(() => {
    page = new AngularBlogAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
