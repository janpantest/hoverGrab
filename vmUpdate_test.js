// const googleResults = require("./pages/googleResults");

Feature('vm');

// Scenario('google', ({ I, googleInputPage, googleResultsPage, valmezHomePage, valmezVedeniMestaPage, valmezVedeniMestaDetailPage }) => {
//     googleInputPage.acceptAgreement();

//     I.switchToPreviousTab(0)
//     googleInputPage.enterString('valmez')
//     googleResultsPage.clickLink();
//     valmezHomePage.clickVedeniMesta()
//     valmezVedeniMestaPage.clickVedeniMesta()
//     valmezVedeniMestaDetailPage.grabJmena()

//     });

// Scenario('seznam', async ({ I, seznamHomePage, seznamResultsPage, valmezHomePage, valmezVedeniMestaPage, valmezVedeniMestaDetailPage }) => {
//     seznamHomePage.goToSeznam('valmez');
//     // googleInputPage.acceptAgreement();
//     seznamResultsPage.grabb()
//     seznamResultsPage.clickLink()
//     valmezHomePage.clickVedeniMesta()
//     valmezVedeniMestaPage.clickVedeniMesta()
//     valmezVedeniMestaDetailPage.grabJmena()

// });

// Scenario('seznam', async ({ I, introPage, seznamHomePage, seznamResultsPage, valmezHomePage, valmezVedeniMestaPage, valmezVedeniMestaDetailPage }) => {
//     introPage.checkPage('https://seznam.cz');
//     seznamHomePage.checkTitle('Seznam');
//     seznamHomePage.enterString('valmez');
//     seznamResultsPage.grabb();
//     seznamResultsPage.clickLink();
//     valmezHomePage.clickVedeniMesta();
//     valmezVedeniMestaPage.clickVedeniMesta();
//     valmezVedeniMestaDetailPage.grabJmena();

// });


// Scenario('GOOGLE idnes - kraje', ({ I, googleResultsPage, googleInputPage, idnesHomePage, idnesBrnoPage }) => {
//     googleInputPage.acceptAgreement();

//     I.switchToPreviousTab(0)
//     googleInputPage.enterString('idnes')
//     googleResultsPage.clickLinkIdnes();
//     // idnesHomePage.clickAcceptCookies();
//     idnesHomePage.clickLinkBrno();
//     idnesBrnoPage.clickZlin();


// });

// Scenario('google/grabb', async ({ I, googleInputPage, googleResultsPage, idnesHomePage, idnesBrnoPage }) => {
//     var assert = require('assert');

//     googleInputPage.checkPage('https://google.com')
//     googleInputPage.acceptCookies();
    
//     googleInputPage.enterString('idnes');
//     assert.strictEqual(await googleResultsPage.grabbing(), 'adresy');
    
//     googleResultsPage.grabbing();
//     googleResultsPage.clickLinkIdnes();
//     // idnesHomePage.clickAcceptCookies();
//     idnesHomePage.clickLinkBrno();
//     idnesBrnoPage.clickZlin();

// });


// Scenario('google - updated', ({ I, introPage, googleInputPage, googleResultsPage, idnesHomePage, idnesBrnoPage }) => {
//     introPage.checkPage('https://google.cz')
//     googleInputPage.acceptCookies();
//     googleInputPage.enterString('idnes')
//     googleResultsPage.clickLinkIdnes();
//     // idnesHomePage.clickAcceptCookies();
//     idnesHomePage.clickLinkBrno();
//     idnesBrnoPage.clickZlin();

// });


Scenario('Seznam assert grab', async ({I, seznamHomePage}) => {
    var assert = require('assert');
    seznamHomePage.checkPage('https://seznam.cz');
    // assert.equal(await seznamHomePage.grabbingSvatek(), 'má');
    assert.strictEqual(await seznamHomePage.grabovaniTest(), 'má');
    // seznamHomePage.grabbing();
})
