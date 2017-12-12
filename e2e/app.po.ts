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

export class AppEditor {
  static edit(text: string) {
    return element(by.css('app-root .app-editor [contenteditable=true]')).sendKeys(text);
  }

  static get() {
    return element(by.css('app-root .app-editor [contenteditable=true]')).getText();
  }
}
