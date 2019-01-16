const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});
const cheerio = require('cheerio');

//Goes to bogus basin site
nightmare.goto('https://bogusbasin.org/the-mountain/overview/conditions-webcams/')
	//waits 2 seconds to ensure loading of all html
	.wait(2000)

	.evaluate(function() {
		return document.body.innerHTML;
	})
	.then(function(body) {
		const $ = cheerio.load(body);
		const temp = $('#conditions-now-temp').text();
		console.log(temp);
	})
