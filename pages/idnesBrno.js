const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
  krajeZlin: "(//a[@href='https://www.idnes.cz/zlin'])[1]",
  kraje: "(//li/a[@href='https://www.idnes.cz/kraje'])[1]",
  krajSelektorZlin: "//h3/a[contains(text(), 'Zlín')]",
  krajSelektorBrno: "//h3/a[contains(text(), 'Brno')]"
  
  },

  clickZlin() {
    I.seeInTitle('Brno');
    // I.waitForElement(this.locators.krajSelektorBrno)
    // I.seeElement(this.locators.krajSelektorBrno);
    I.moveCursorTo(this.locators.kraje);
    I.waitForClickable(this.locators.krajeZlin);
    I.click(thiq.locators.krajeZlin);
    I.seeElement(this.locators.krajSelektorZlin)
  }
}
