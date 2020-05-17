import puppeteer from 'puppeteer';

describe('Header', () => {
    test('Get correct total result after ini', async () => {
        let browser = await puppeteer.launch({
            headless: false
        });
        let page = await browser.newPage();

        await page.emulate({
            viewport: {
                width: 1200,
                height: 2000
            },
            userAgent: ''
        });

        await page.goto('http://localhost:9000/search');
        await page.waitFor(2000);

        const html = await page.$eval('.sort-panel__details', e => e.innerText);
        expect(html).toBe('Total: 3000');

        browser.close();
    }, 16000);
});
