const configureHTMLStorybook = require('../configure-html-storybook');

describe('Configure HTML Storybook', () => {

  it('should export a function', () => {
    expect(configureHTMLStorybook).toBeInstanceOf(Function);
  });

});
