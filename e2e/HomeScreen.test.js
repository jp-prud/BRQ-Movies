describe('<HomeScreen />', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  
  it.skip('should input credentials and navigate to home screen', async () => { 
    await element(by.id('username-input')).typeText('user')
    await element(by.id('password-input')).typeText('123')

    await element(by.id('submit-button')).tap()

    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it.skip('should render movie list', async () => {
    expect(element(by.id('movies-list'))).toBeVisible();
    expect(element(by.id('movie-item-0'))).toBeVisible();   
  });

  it.skip('should render favorite movie list when the favorite button is clicked', async () => {
    await element(by.text('Filmes Favoritos')).tap()

    await expect(element(by.id('favorite-movies-list'))).toBeVisible();
  });

  it.skip('should navigate to the details screen', async () => {
    await element(by.id('movie-item-0')).tap()

    await expect(element(by.id('details-screen'))).toBeVisible();
  });
})