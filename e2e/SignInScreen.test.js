describe('<SignInScreen />', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
    await device.launchApp({delete: true});
  });

  it.skip('should have signIn screen', async () => {
    await expect(element(by.id('BRQ-Icon'))).toBeVisible();
  });

  it.skip('should input credentials and navigate to home screen', async () => { 
    await element(by.id('username-input')).typeText('user')
    await element(by.id('password-input')).typeText('123')

    await element(by.id('submit-button')).tap()
  });

  it.skip('should show error message when credentials are wrong', async () => { 
    await element(by.id('username-input')).typeText('wrong')
    await element(by.id('password-input')).typeText('1234')

    await element(by.id('submit-button')).tap()

    await expect(element(by.id('erro-message'))).toBeVisible();
    // await expect(element(by.id('toast-info'))).toBeVisible();
  })
});
