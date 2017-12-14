import { AppPage, AppHeader, AppEditor } from './app.po';

describe('collabpad layout', () => {
  it('should display the app title', async () => {
    await AppPage.navigateTo();
    await expect(AppHeader.getTitleText()).toEqual('Scratchpad');
  });
});

describe('editor', () => {
  it('should edit the document', async () => {
    const text = 'I am the example text!';
    await AppPage.navigateTo();
    await AppEditor.edit(text);
    await expect(AppEditor.get()).toContain(text);
  });
});
