const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    searchField: "//input[@name='q']",
    foundOption: "//button[@class='search-form__button button button--submit button--with-input']",
    submitButton: "(//button[@type='submit'])[2]",
    svatek: "//span[@class='gadget__calendar-item style-tags style-tags--gadget-title' or class='gadget__calendar']",
    statniSvatek: "(//span[@class='gadget__calendar-item'])[2]",
  },

  goToSeznam(string) {
    I.amOnPage('https://www.seznam.cz/');
    I.seeInTitle('Seznam');
    I.waitForElement(this.locators.searchField);
    I.fillField(this.locators.searchField, string);
    I.click(this.locators.submitButton);

  },

  checkPage(string) {
    I.amOnPage(string);
  },

  checkTitle(string) {
    I.seeInTitle(string);
  },

  enterString(string) {
    I.waitForElement(this.locators.searchField);
    I.fillField(this.locators.searchField, string);
    I.click(this.locators.submitButton);
  }, 

  async grabbingSvatek() {
    let slovo = await I.grabTextFrom(this.locators.svatek);

    console.log(`tohle je cely string ${slovo}`);
    slovo = slovo.split(' ');
    console.log(`Kdo ma dneska svatek?? >>>  ${slovo[2]}  <<<`)
    slovo = slovo[1];
    console.log(`hledany string je:  ${slovo}`);
    // assert.equal(slovo, 'má');
    return slovo;
  },

  async grabbingStatniSvatek() {
    let slovo = await I.grabTextFrom(this.locators.statniSvatek);

    console.log(`tohle je cely string ${slovo}`);
    slovo = slovo.split(' ');
    slovo = slovo[1];
    console.log(`hledany string je:  ${slovo}`);
    // assert.equal(slovo, 'má');
    return slovo;
  },

  async grabovaniTest() {
    // return (I.seeElement(this.locators.statniSvatek)) ? this.grabbingStatniSvatek() : this.grabbingSvatek();
    return (I.dontSeeElement(this.locators.statniSvatek)) ? this.grabbingSvatek() : this.grabbingStatniSvatek();
  },


}
