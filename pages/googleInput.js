const { I } = inject();

module.exports = {
  
  // insert your locators and methods here
  locators: {
    agreeButton: "//form/div[@id='introAgreeButton']",
    searchField: "//input[@name='q']",
    agreeLabel: "//iframe[contains(@src, 'consent.google.com')",
    searchOption: "(//div[@class='sbl1'])[1]",
    acceptButton: "//div[contains(text(), 'Souhlasím')]"
  },

  acceptAgreement() {
    I.amOnPage('https://google.com');
    I.switchTo({xpath: '//iframe[contains(@src, "consent.google.com")]'});
    I.click({xpath: '//div[@id="introAgreeButton"]'});

    // if (I.seeElement(this.locators.agreeLabel)) {
    //   I.switchTo(this.locators.agreeLabel)
    //   I.click(this.locators.agreeButton)
    // }

  },

  acceptPopUp(url) {
    I.amOnPage(url);
    I.click(this.locators.acceptButton);
  },
  

  acceptCookies() {
    
    I.switchTo({xpath: '//iframe[contains(@src, "consent.google.com")]'});
    I.click({xpath: '//div[@id="introAgreeButton"]'});
    I.switchToPreviousTab(0)


  },

  // enterString(string) {
  //   I.amOnPage('https://www.google.com/');
  //   this.acceptAgreement();
  //   I.seeInTitle('Google');
  //   // I.seeElement(this.locators.searchField);
  //   // I.fillField(this.locators.searchField);
  // }

  enterString(string) {
    I.seeInTitle('Google');
    I.seeElement(this.locators.searchField);
    I.fillField(this.locators.searchField, string);
    I.click(this.locators.searchOption)
  },

  checkPage(string) {
    I.amOnPage(string);
  },

  acceptance() {
    I.switchTo(this.locators.agreeLabel);
    I.switchToPreviousTab(0);
    // I.click(this.locators.agreeButton);
  },


}

