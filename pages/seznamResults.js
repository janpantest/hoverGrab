const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    firstLink: "(//a/span/b[contains(text(), 'Valašské Meziříčí')])[1]",
    zkouska: "(//a[@class='AnchorList-link'])[1]"
  },

  async clickLink() {
    I.seeInTitle('valmez');
    // I.waitForElement(this.locators.firstLink, 10)
    // let firstLink = await I.grabTextFrom(this.locators.firstLink);
    // console.log(`obsah linku: ${firstLink}`);
    I.click(this.locators.firstLink);
    // I.seeInTitle('Valašské Meziříčí');
  },

  async grabb() {
    I.seeInTitle('valmez')
    let aa = await I.grabTextFrom(this.locators.firstLink);
    console.log(`toto je element: ${aa}`);
  }
}
