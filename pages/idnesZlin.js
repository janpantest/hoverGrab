const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    krajSelektorZlin: "//h3/a[contains(text(), 'Zlín')]",
},

checkZlin() {
  I.seeInTitle('Zlín');
  I.seeElement(this.locators.krajSelektorZlin);
}
}
