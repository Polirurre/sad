const pageScraper = require('./pageScraper');

const fsJson = require('fs');

var categoryNames = require('./categoryScraper');
const { randomInt } = require('crypto');
var categories=categoryNames.categoriesNames;

function getRanArr(lngth) {
	let arr = [];
	do {
		let ran = Math.floor(Math.random() * categories.length); 
		arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
	 }while (arr.length < lngth)
	 
	 return arr;
  }

async function scrape(browserInstance){
	var browser;
	try{
		browser = await browserInstance;

		//var scrapedData = {};
		var scrapedData = [];
		var arrInit = [];
		let arrAdd = [];

		// Call the scraper for different set of books to be scraped
		const generatedCategories = getRanArr(5);
		
		for(let i=0;i<generatedCategories.length;i++){
			arrAdd = await pageScraper.scraper(browser, categories[generatedCategories[i]]);
			arrInit = arrInit.concat(arrAdd);
		}

		scrapedData = arrInit;
		
		/*Scrape only Travel category
		scrapedData = await pageScraper.scraper(browser, "Travel");*/

		await browser.close();

		fsJson.writeFile("DATA/data.json", JSON.stringify(scrapedData, null, '\t'), 'utf8', function(err) {
		    if(err) {
		        return console.log(err);
		    }
		    console.log("Data scraped into JSON successfully! View it at './DATA/data.json'");
		});
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrape(browserInstance)