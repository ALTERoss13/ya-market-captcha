import puppeteer from 'puppeteer-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

puppeteer.use(stealth);

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
	});

	const page = await browser.newPage();
	await page.goto('https://market.yandex.ru/product--konstruktor-lego-city-60316-politseiskii-uchastok/1780549576/offers?cpa=1&cpc=SnNmLHN418xLOk5Z_C_CXf05-K01E_F4bCQmOtj4VfPc-yyp83MveJPiii7ehV-We0FNDZXJMxlPV6yYIWHRRjdK2fYyH2wtv-6PqQwH1s0aFUE-aQA4ZMolgePgPg-vL9R0TJwTg3NR-t7NE9IzjKGsGKtPK1N-UNtAbAuU43dIoFYHzDz7NG4lTdlUvnsMpafVlaJ1T6zGHY_r1C1XyGGi9OQG5YmlWVoQyb6wXEs%2C&how=aprice&grhow=supplier&sku=1492289842&do-waremd5=xei0Wr0m6JQInBSZH3ifig&local-offers-first=0');
})();
