const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    linkVedeniMesta: "//li/a[./text()='Vedení města']"
  },


  clickVedeniMesta() {
    I.seeInTitle('Valašské Meziříčí');
    I.click(this.locators.linkVedeniMesta);
  }

}
