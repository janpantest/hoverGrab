const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    linkVM: "//div/div/cite[contains(text(), 'www.valasskemezirici.cz')]",
    linkIdnes: "//h3/span[contains(text(), 'iDNES.cz – s námi víte víc')]"
  },

  clickLink() {
    I.seeInTitle('valmez');
    I.click(this.locators.linkVM);
  },

  clickLinkIdnes() {
    I.seeInTitle('idnes');
    I.click(this.locators.linkIdnes)
  }
}
