// const googleResults = require("./pages/googleResults");

Feature('vm');

Scenario('google', ({ I, googleInputPage, googleResultsPage, valmezHomePage, valmezVedeniMestaPage, valmezVedeniMestaDetailPage }) => {
    googleInputPage.acceptAgreement();

    I.switchToPreviousTab(0)
    googleInputPage.enterString('valmez')
    googleResultsPage.clickLink();
    valmezHomePage.clickVedeniMesta()
    valmezVedeniMestaPage.clickVedeniMesta()
    valmezVedeniMestaDetailPage.grabJmena()

    });

// Scenario('seznam', async ({ I, seznamHomePage, seznamResultsPage, valmezHomePage, valmezVedeniMestaPage, valmezVedeniMestaDetailPage }) => {
//     seznamHomePage.goToSeznam('valmez');
//     // googleInputPage.acceptAgreement();
//     seznamResultsPage.grabb()
//     seznamResultsPage.clickLink()
//     valmezHomePage.clickVedeniMesta()
//     valmezVedeniMestaPage.clickVedeniMesta()
//     valmezVedeniMestaDetailPage.grabJmena()

// });

Scenario('seznam', async ({ I, seznamHomePage, seznamResultsPage, valmezHomePage, valmezVedeniMestaPage, valmezVedeniMestaDetailPage }) => {
    seznamHomePage.checkPage('https://seznam.cz');
    seznamHomePage.checkTitle('Seznam');
    seznamHomePage.enterString('valmez');
    seznamResultsPage.grabb();
    seznamResultsPage.clickLink();
    valmezHomePage.clickVedeniMesta();
    valmezVedeniMestaPage.clickVedeniMesta();
    valmezVedeniMestaDetailPage.grabJmena();

});


// Scenario('GOOGLE idnes - kraje', ({ I, googleResultsPage, googleInputPage, idnesHomePage, idnesBrnoPage }) => {
//     googleInputPage.acceptAgreement();

//     I.switchToPreviousTab(0)
//     googleInputPage.enterString('idnes')
//     googleResultsPage.clickLinkIdnes();
//     // idnesHomePage.clickAcceptCookies();
//     idnesHomePage.clickLinkBrno();
//     idnesBrnoPage.clickZlin();


// });


Scenario('google', ({ I, googleInputPage, googleResultsPage, idnesHomePage, idnesBrnoPage }) => {
    googleInputPage.checkPage('https://google.com')
    googleInputPage.acceptCookies();
    googleInputPage.enterString('idnes')
    googleResultsPage.clickLinkIdnes();
    // idnesHomePage.clickAcceptCookies();
    idnesHomePage.clickLinkBrno();
    idnesBrnoPage.clickZlin();

});
