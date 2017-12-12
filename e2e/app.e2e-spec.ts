import { AppPage, AppHeader } from './app.po';

describe('collabpad layout', () => {

  it('should display the app title', async () => {
    await AppPage.navigateTo();
    await expect(AppHeader.getTitleText()).toEqual('CollabPad');
  });
});
