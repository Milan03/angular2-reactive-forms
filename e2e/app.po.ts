import { browser, element, by } from 'protractor';

export class MyReactiveFormsProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
