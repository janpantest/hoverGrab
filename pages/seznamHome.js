const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    searchField: "//input[@name='q']",
    foundOption: "//button[@class='search-form__button button button--submit button--with-input']",
    submitButton: "(//button[@type='submit'])[2]",
  },

  goToSeznam(string) {
    I.amOnPage('https://www.seznam.cz/');
    I.seeInTitle('Seznam');
    I.waitForElement(this.locators.searchField);
    I.fillField(this.locators.searchField, string)
    I.click(this.locators.submitButton)

  }
}
