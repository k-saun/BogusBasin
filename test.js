const request = require('request');
const cheerio = require('cheerio');
const jsdom = require('jsdom');

/*request('http://bogusbasin.org', (error, response, html) => {
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
});*/
const { JSDOM } = jsdom;
/*const dom = new JSDOM('https://bogusbasin.org/the-mountain/overview/conditions-webcams/').window;
//console.log(dom.window.document.querySelector("p").textContent); // "Hello world"*/
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"