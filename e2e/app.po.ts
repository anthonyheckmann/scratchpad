import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }
}

export class AppHeader {
  static getTitleText() {
    return element(by.css('app-root .app-title')).getText();
  }
}
