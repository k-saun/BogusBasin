const request = require('request');
const cheerio = require('cheerio');

request('http://bogusbasin.org', (error, response, html) => {
	if(!error && response.statusCode == 200) {
		const $ = cheerio.load(html);

		const intro = $('.intro__content');
		console.log(intro.children('h2').next().text());
		const menu = $('.menu a');

		menu.each((i, li) => {
			const text = $(li).text();
			console.log(text);
			//const text = $(li).text();
			//console.log(text);
		});
	}
});