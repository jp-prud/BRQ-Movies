describe('<DetailsMovieScreen />', () => { 
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should input credentials and navigate to home screen', async () => { 
    await element(by.id('username-input')).typeText('user')
    await element(by.id('password-input')).typeText('123')

    await element(by.id('submit-button')).tap()

    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it('should navigate to the details screen', async () => {
    await element(by.id('movie-item-0')).atIndex(0).tap()
    await expect(element(by.id('details-screen'))).toBeVisible();
  });

  it.skip('should navigate to details screen when similar movie is clicked', async () => { 
    // const screen = element(by.id('details-screen'));
    // const similarMoviesList = element(by.id('similar-movies-list'));

    // await waitFor(similarMoviesList)
    //   .toBeVisible()
    //   .whileElement(screen)
    //   .scroll(400, 'down');
    
    // await element(by.id('details-screen')).scroll(400, 'down');
    
    // await element(by.id('movie-item-0')).withAncestor(by.id('similar-movies-list')).tap();
    // await expect(element(by.id('details-screen'))).toBeVisible();
  });

  it('should favorite a movie', async () => { 
    await element(by.id('movie-item-0')).tap();
    await element(by.id(/favorite-icon-(favorited|not-favorited)/)).atIndex(0).tap();
  });

});