const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    linkVedeniMesta: "//strong/a[./text()='Vedení města']"
  },

  clickVedeniMesta() {
    I.seeInTitle('Vedení města')
    I.click(this.locators.linkVedeniMesta);
  }

}
