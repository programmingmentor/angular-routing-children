import { NgRoutingTestPage } from './app.po';

describe('ng-routing-test App', () => {
  let page: NgRoutingTestPage;

  beforeEach(() => {
    page = new NgRoutingTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
