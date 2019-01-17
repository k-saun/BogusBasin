const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});
const cheerio = require('cheerio');
var stats = [];

//Goes to bogus basin site
nightmare.goto('https://bogusbasin.org/the-mountain/overview/conditions-webcams/')
	//waits 2 seconds to ensure loading of all html
	.wait(2000)

	.evaluate(() => {
		return document.body.innerHTML;
	})
	.end()
	.then(function(body) {
		const $ = cheerio.load(body);
		stats = [{ 	name: "temp",
					val: $('#conditions-now-temp').text()},

				{	name: "baseDepth",
					val: $('#conditions-snow-current-base-depth').text()},

				{	name: "snowSeason",
					val: $('#conditions-snow-season-total').text()},

				{ 	name: "snow48hr",
					val: $('#conditions-snow-last-48').text()},

				{	name: "snow24hr",
					val: $('#conditions-snow-last-24').text()},

				{	name: "snowOvernight",
				 	val: $('#conditions-snow-overnight').text()}
				];
				

		stats.forEach((element) => {

			//to be able to print an objects inner elements, use JSON.parse(element) then print. 
			element = JSON.stringify(element);
			console.log(element)
		});

		/*var temp = $('#conditions-now-temp').text();
		var baseDepth = $('#conditions-now-temp').text();
		var seasonSnow = $('conditions-snow-season-total').text();
		var snow48hr = $('conditions-snow-last-48').text();
		var snow24hr = $('conditions-snow-last-24').text();
		var snowOvernight = $('conditions-snow-overnight').text();*/
})
