const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  const fileUrl = 'file://' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  
  // Wait a second for initial load
  await new Promise(r => setTimeout(r, 1000));
  
  // Hover over center of the screen
  await page.mouse.move(500, 500);
  await new Promise(r => setTimeout(r, 500));
  
  // Move mouse around to trigger raycaster
  for(let i=0; i<10; i++) {
    await page.mouse.move(400 + i*20, 400 + i*20);
    await new Promise(r => setTimeout(r, 50));
  }
  
  await browser.close();
})();
