import puppeteer from "puppeteer";

describe("show/hide an event's details'", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    // wait for the node with class name 'Event' to load
    await page.waitForSelector(".Event");
  });

  afterAll(() => {
    browser.close();
  })

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".Event .eventDetails");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".Event .details-btn");

    const eventDetails = await page.$(".Event .eventDetails");
    expect(eventDetails).toBeDefined();
  });
  
});
