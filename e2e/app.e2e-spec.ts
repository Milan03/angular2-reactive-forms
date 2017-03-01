import { MyReactiveFormsProjectPage } from './app.po';

describe('my-reactive-forms-project App', function() {
  let page: MyReactiveFormsProjectPage;

  beforeEach(() => {
    page = new MyReactiveFormsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
