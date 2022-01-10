import puppeteer from 'puppeteer';

describe("show/hide an event's details'", () => {
  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    // wait for the node with classname 'Event' to load
    await page.waitForSelector('.Event');
    const eventDetails = await page.$('.Event .eventDetails');
    expect(eventDetails).toBeNull();
    browser.close();
  });
})
