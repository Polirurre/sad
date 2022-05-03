const browserObject = require('./SCRAPER/browser');
const scraperController = require('./SCRAPER/pageController');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)

//FRONT END!
