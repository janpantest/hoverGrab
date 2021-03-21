const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    googleInputPage: './pages/googleInput.js',
    seznamHomePage: './pages/seznamHome.js',
    seznamResultsPage: './pages/seznamResults.js',
    valmezHomePage: './pages/valmezHome.js',
    valmezVedeniMestaPage: './pages/valmezVedeniMesta.js',
    valmezVedeniMestaDetailPage: './pages/valmezVedeniMestaDetail.js',
    googleResultsPage: './pages/googleResults.js',
    idnesHomePage: './pages/idnesHome.js',
    idnesBrnoPage: './pages/idnesBrno.js',
    introPage: './pages/intro.js',
    idnesZlinPage: './pages/idnesZlin.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'vm',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}